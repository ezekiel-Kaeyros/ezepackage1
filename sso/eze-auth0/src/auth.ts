import passport from "passport";
import { Strategy as SamlStrategy, SamlConfig } from "passport-saml";
import express from "express";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import { isFirstTime, toggleFirstTime, getUserByEmail } from "./db/user";
import config from "./config";

const authRouter = express.Router();

// Path to the certificate file
const certPath = path.join(__dirname, `${config.auth0ID}.pem`);
const cert = fs.readFileSync(certPath, "utf-8");

// SAML configuration options
const samlOptions: SamlConfig = {
  path: "/auth/login/callback",
  entryPoint: `https://${config.auth0ID}.us.auth0.com/samlp/${config.auth0ClientId}`,
  issuer: `urn:${config.auth0ID}.us.auth0.com`,
  cert: cert,
  callbackUrl: `${config.ssoUrl}/auth/login/callback`,
  acceptedClockSkewMs: 60000, // Allow 60 seconds of clock skew
};

// SAML strategy
const samlStrategy = new SamlStrategy(samlOptions, (profile, done: any) => {
  return done(null, profile);
}) as unknown as passport.Strategy;

passport.use(samlStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

// Initialize Passport and restore authentication state, if any, from the session
authRouter.use(passport.initialize());
authRouter.use(passport.session());

authRouter.get("/login", (req, res, next) => {
  const moduleParam = req.query.module;

  if (moduleParam) {
    res.cookie("module", moduleParam, { httpOnly: true, secure: true });
  }

  passport.authenticate("saml")(req, res, next);
});

authRouter.post(
  "/login/callback",
  passport.authenticate("saml", {
    failureRedirect: "/",
    failureFlash: true,
  }),
  async (req, res) => {
    console.log("Authentication successful, redirecting ...");
    const moduleRedirect = req.cookies.module;

    res.clearCookie("module")
    const user = req.user;
    if (!user) return res.status(404).redirect(`${config.landingPageUrl}`)
    const email: string = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
    const user_id = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const username = user["'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'"]

    const getUserInfo = await getUserByEmail(email)

    const userdata2 = {
      email: (getUserInfo && getUserInfo.email) || email,
      userId: (getUserInfo && getUserInfo._id) || user_id,
    };

    const UserData = {
      email: (getUserInfo && getUserInfo.email) || email,
      _id: (getUserInfo && getUserInfo._id) || user_id,
      username: (getUserInfo && getUserInfo.username) || username,
    };

    // Generate a token
    const token = jwt.sign({ user: userdata2 }, config.secret);

    console.log("REDIRECT TO: ", req.cookies.module)


    const firstTime = await isFirstTime(email);
    res.clearCookie("module")
    if (process.env.NODE_ENV === "production") {
      res.cookie("token", token, { domain: ".eze.ink" })
      res.cookie("user_data", JSON.stringify(UserData), { domain: ".eze.ink" })
    } else {
      res.cookie("token", token, { path: "/" })
      res.cookie("user_data", JSON.stringify(UserData), { path: "/"})
    }

    if (firstTime) {
      try {
        const isToggleFirstTime = await toggleFirstTime(email);

        res.redirect(`${config.landingPageUrl}/en/onboarding/?step=1`)
      } catch (error) {
        console.log('Error:', error.message)
      }
    } else {
      if (req.cookies.module) {
        res.redirect(`${req.cookies.module}`)
      } else {
        res.redirect(`${config.communitiesUrl}`)
      }
    }
  }
);

authRouter.get("/", async (req, res) => {
  try {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: "Unauthorized" })
    const tokenData = jwt.verify(token, config.secret) as { user: { email: string, userId: string } }
    if (!tokenData) return res.status(401).json({ message: "Invalid token" })
    const userData = await getUserByEmail(tokenData.user?.email)
    if (!userData) return res.status(404).json({ message: "User Not found" })

    return res.json({ user: userData })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: err })
  }
})

authRouter.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.redirect("/");
    }

    req.session.destroy((err) => {
      if (err) {
        console.error("Session destruction error:", err);
      }

      // Clear the session cookie
      res.clearCookie("connect.sid", { path: "/" });
      if (process.env.NODE_ENV === "production") {
        res.clearCookie("token", { domain: ".eze.ink" });
      } else {
        res.clearCookie("token", { path: "/" });
      }

      // Construct the Auth0 logout URL
      const auth0LogoutUrl = new URL(`https://${config.auth0ID}.us.auth0.com/v2/logout`);
      auth0LogoutUrl.searchParams.append("returnTo", config.landingPageUrl);
      auth0LogoutUrl.searchParams.append("client_id", config.auth0ClientId);

      // Redirect to Auth0 logout URL
      res.redirect(auth0LogoutUrl.toString());
    });
  });
});


export default authRouter;
