import passport from "passport";
import { Strategy as SamlStrategy, SamlConfig } from "passport-saml";
import express from "express";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { isFirstTime, toggleFirstTime, getUserByEmail } from "./db/user";
dotenv.config();

const authRouter = express.Router();

// Path to the certificate file
const certPath = path.join(__dirname, "dev-7htaauz8ydzvm6gp.pem");
const cert = fs.readFileSync(certPath, "utf-8");

// SAML configuration options
const samlOptions: SamlConfig = {
  path: "/auth/login/callback",
  entryPoint: "https://dev-7htaauz8ydzvm6gp.us.auth0.com/samlp/3MRQwdMikF9rCgf5pYqK1xuj75Ruaigk",
  issuer: "urn:dev-7htaauz8ydzvm6gp.us.auth0.com",
  cert: cert,
  callbackUrl: process.env.CALLBACK_URL,
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
    const moduleCookie = req.cookies.module;

    const user = req.user;
    const email = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    const username = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const fullname = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const user_id = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    const getUserInfo = await getUserByEmail(email)

    const userdata = {
      username: (getUserInfo && getUserInfo.username) || username,
      fullName: (getUserInfo && getUserInfo.fullName) || fullname,
      email: (getUserInfo && getUserInfo.email) || email,
    };

    const userdata2 = {
      email: (getUserInfo && getUserInfo.email) || email,
      userId: (getUserInfo && getUserInfo._id) || user_id,
    };

    // Generate a token
    const token = jwt.sign({ user: userdata2 }, "WriteYourSecret");

    const userdataString = JSON.stringify(userdata);
    console.log("REDIRECT TO: ", req.cookies.module)

    const firstTime = await isFirstTime(email);

    if (firstTime) {
      try {
        const isToggleFirstTime = await toggleFirstTime(email);

        res.redirect(`${process.env.LANDINGPAGE_URL}/en/onboarding/?step=1&token=${token}&user=${userdataString}`)
      } catch (error) {
        console.log('Error:', error.message)
      }
    } else {
      if (req.cookies.module) {
        res.redirect(`${req.cookies.module}?token=${token}&user=${userdataString}`)
      } else {
        // res.redirect(`${process.env.LANDINGPAGE_URL}/en/onboarding/?step=1&token=${token}&user=${userdataString}`)
        res.redirect(`${process.env.COMMUNITIES_URL}?token=${token}&user=${userdataString}`)
      }
    }
  }
);

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

      // Construct the Auth0 logout URL
      const auth0LogoutUrl = new URL("https://dev-7htaauz8ydzvm6gp.us.auth0.com/v2/logout");
      auth0LogoutUrl.searchParams.append("returnTo", process.env.REDIRECT_ORIGIN);
      auth0LogoutUrl.searchParams.append("client_id", "3MRQwdMikF9rCgf5pYqK1xuj75Ruaigk");

      // Redirect to Auth0 logout URL
      res.redirect(auth0LogoutUrl.toString());
    });
  });
});



export default authRouter;
