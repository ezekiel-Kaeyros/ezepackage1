export interface IRegisterUser extends IUser {
  id: string;
  fullname: string;
  contact: string;
  roles?: Array<string>;
  status?: number;
  data?: any;
}

export interface ILoggedInUserReturnType extends IUser {
  token: string;
  status?: number;
  // role: number | string;
  data?: any;
}

export interface IForgettenPassword {
  email: string;
}

export interface IUpdateUserType {
  email: string;
  password: string;
  newPassword: string;
}

export interface IUser {
  id?: string;
  email: string;
  password: string;
  fullname: string;
  contact: string;
  roles: Array<string>;
  statut?: string;
  startDate?: Date;
  endDate?: Date;
}
