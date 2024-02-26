import DataService from './dataService';

export default class AuthService extends DataService {
  login = (data: { email: string; password: string }) => {
    this.post('/auth/login', data);
    return;
  };

  register = (data: any, config: any) => {
    return this.post('/auth/register', data);
  };

  forgottenPassword = (data: any) => {
    return this.post('/auth/forgottenPassword', data);
  };
}
