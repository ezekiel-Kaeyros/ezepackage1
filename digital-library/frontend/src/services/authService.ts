// import { AuthState } from '@/redux/features/auth-slice';
import DataService from './dataService';
import { IRegisterUser } from './authService.d';
import { ILoggedInUserReturnType } from './authService.d';
import { IForgettenPassword } from './authService.d';
import { IUser } from './authService.d';
import { IUpdateUserType } from './authService.d';


export default class AuthService extends DataService {
  login = (data: {
    email: string;
    password: string;
  }): Promise<ILoggedInUserReturnType> => {
    // console.log(data, 'this is my data');
    return this.post('/auth/login/', data);
  };

  register = (data: {
    contact: string;
    fullname: string;
    email: string;
    // roles: Array<string>;
    // startDate: string;
    password: string;
    // endDate: string;
  }): Promise<IRegisterUser> => {
    return this.post('/auth/register', data);
  };

  forgottenPassword = (data: any): Promise<IForgettenPassword> => {
    return this.post('/users/forgottenPassword', data);
  };


  

}
