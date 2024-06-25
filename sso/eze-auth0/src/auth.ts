import passport from "passport";
import { Strategy as SamlStrategy, SamlConfig } from "passport-saml";
import express from "express";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
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
  console.log("SAML Strategy - profile:", profile);
  return done(null, profile);
}) as unknown as passport.Strategy;

passport.use(samlStrategy);

passport.serializeUser((user, done) => {
  console.log("Serializing user:", user);
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  console.log("Deserializing user:", user);
  done(null, user);
});

// Initialize Passport and restore authentication state, if any, from the session
authRouter.use(passport.initialize());
authRouter.use(passport.session());

authRouter.get("/login", (req, res, next) => {
  const moduleParam = req.query.module;

  if (moduleParam) {
    res.cookie("module", moduleParam, { httpOnly: true, secure: true });
    console.log(`Module parameter value saved in cookie: ${moduleParam}`);
  }

  console.log("Redirecting to Auth0 login");
  passport.authenticate("saml")(req, res, next);
});

authRouter.post(
  "/login/callback",
  passport.authenticate("saml", {
    failureRedirect: "/",
    failureFlash: true,
  }),
  (req, res) => {
    console.log("Authentication successful, redirecting ...");
    const moduleCookie = req.cookies.module;

    const user = req.user;
    const email = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    const username = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    const fullname = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const user_id = user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    const userdata = {
      username: username,
      fullName: fullname,
      email: email,
    };

    const userdata2 = {
      email: email,
      userId: user_id,
    };

    // Generate a token
    const token = jwt.sign({ user: userdata2 }, "WriteYourSecret", { expiresIn: "1h" });

    const userdataString = JSON.stringify(userdata);

    if (moduleCookie) {
      console.log("Module Cookie Retrieved Successfully: ", moduleCookie);
    } else {
      console.log("Unsuccessful Retrieval Of Module Cookie");
    }

    res.redirect(`${moduleCookie}?step=1&token=${token}&user=${userdataString}`);
  }
);

authRouter.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }
    req.session.destroy((err) => {
      if (err) {
        console.error("Session destruction error:", err);
      }
      res.clearCookie("connect.sid", { path: "/" }); // Clear the session cookie
      const auth0LogoutUrl = "https://dev-7htaauz8ydzvm6gp.us.auth0.com/v2/logout?returnTo=http://localhost:3000&client_id=3MRQwdMikF9rCgf5pYqK1xuj75Ruaigk";
      res.redirect(auth0LogoutUrl);
    });
  });
});

export default authRouter;
