import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import passport from 'passport';
import Auth0Strategy, { Profile } from 'passport-auth0';
import axios from 'axios';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: true,
}));

const strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN as string,
  clientID: process.env.AUTH0_CLIENT_ID as string,
  clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
  callbackURL: process.env.AUTH0_CALLBACK_URL as string
}, (accessToken: string, refreshToken: string, extraParams: any, profile: Profile, done: Function) => {
  return done(null, profile);
});

passport.use(strategy);

passport.serializeUser((user: Express.User, done: (err: any, id?: any) => void) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done: (err: any, id?: any) => void) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile'
}), (req: Request, res: Response) => {
  res.redirect('/');
});

app.get('/callback', (req: Request, res: Response, next: NextFunction) => {
  next();
}, passport.authenticate('auth0', {
  failureRedirect: '/login'
}), (req: Request, res: Response) => {
  // This is just redirecting not passing the token
  res.redirect(process.env.ZOTERO_REDIRECT_URI || 'https://www.zotero.org/connector_auth_complete');
});

app.get('/logout', (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      console.error('Logout Error:', err);
    }
    res.redirect('/');
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send(req.user ? `Hello, ${(req.user as any).displayName}` : 'Not logged in');
});

async function getAccessToken(clientId: string, clientSecret: string): Promise<string> {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    const nonce = Math.random().toString(36).substring(2);
    const oauthParams = {
      oauth_consumer_key: clientId,
      oauth_signature_method: 'PLAINTEXT',
      oauth_timestamp: timestamp,
      oauth_nonce: nonce,
      oauth_token: '',
      oauth_signature: `${encodeURIComponent(clientSecret)}&`,
    };

    const response = await axios.post('https://www.zotero.org/oauth/access', null, {
      params: oauthParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return response.data.access_token;
  } catch (error: any) {
    throw error;
  }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sync-user', async (req: Request, res: Response) => {
  const userProfile = req.body;

  try {
    const clientId = process.env.ZOTERO_CLIENT_ID as string;
    const clientSecret = process.env.ZOTERO_CLIENT_SECRET as string;
    const accessToken = await getAccessToken(clientId, clientSecret);

    await axios.post(`${process.env.ZOTERO_URL}/users/${process.env.ZOTERO_USER_ID}`, {
      userId: userProfile.id,
      email: userProfile.emails[0].value.trim(),
      name: userProfile.displayName.trim()
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    res.status(200).send('User synchronized with Zotero');
  } catch (error: any) {
    res.status(500).send('Error synchronizing user with Zotero');
  }
});

const baseURI = 'https://www.zotero.org/oauth/access';

function getQueryString(data: { [key: string]: any }): string {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

app.get('/zotero/auth', (req: Request, res: Response) => {
  console.log("DOES IT GET HERE????????????????????????????????????????")
  const authUrl = `https://www.zotero.org/oauth/authorize?client_id=${process.env.ZOTERO_CLIENT_ID}&redirect_uri=${process.env.ZOTERO_REDIRECT_URI}&response_type=code&scope=groups_read`;
  res.redirect(authUrl);
});

app.get('/user/info', async (req: Request, res: Response) => {
  const { code } = req.query;

  const formData = {
    client_id: process.env.ZOTERO_CLIENT_ID as string,
    client_secret: process.env.ZOTERO_CLIENT_SECRET as string,
    code: code as string,
    grant_type: 'authorization_code',
    redirect_uri: process.env.ZOTERO_REDIRECT_URI as string
  };

  axios.post(baseURI, getQueryString(formData), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
  })
  .then(tokenResponse => {
    const accessToken = tokenResponse.data.access_token;

    return axios.get(`https://api.zotero.org/users/${process.env.ZOTERO_USER_ID}/groups`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
  })
  .then(userResponse => {
    const userData = userResponse.data;
    res.json(userData);
  })
  .catch(error => {
    if (error.response) {
      res.status(500).send('Failed to fetch Zotero data');
    }
  });
});

export default app; // Ensure this is a default export
