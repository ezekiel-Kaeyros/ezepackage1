declare namespace Express {
    interface User {
      nameID?: string;
      nameIDFormat?: string;
    }
  
    interface Request {
      user?: User;
      samlLogoutRequest?: any;
    }
  }
  