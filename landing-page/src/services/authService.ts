import DataService from './dataService';

export default class AuthService extends DataService {
  login = (data: { email: string; password: string }) => {
    return this.post('/login', data);
  };

  register = (data: { email: string; password: string; fullName: string }) => {
    return this.post('/signup', data);
  };

  forgottenPassword = (data: any) => {
    return this.post('/auth/forgottenPassword', data);
  };
}
