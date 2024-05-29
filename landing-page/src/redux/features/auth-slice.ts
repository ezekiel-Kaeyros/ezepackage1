import { getToken, setToken, setUserCookies } from '@/cookies/cookies';
import { createSlice } from '@reduxjs/toolkit';

// Just a boiler plate, this file needs to be updated
export enum UserRole {
  Regular = 'Regular',
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
}
type AuthState = {
  user: {
    _id: string;
     role: string;
    email?: string;
    username?: string;
    image?: string;
    imagePublicId?: string;
    coverImagePublicId?: string;
    coverImage?: string;
    fullName?: string;
    facebookId?: string;
    googleId?: string;
    githubId?: string;
    about?: string;
    website?: string;
    notifications: any[];
    followers: any[];
    following: any[];
    isOnline: boolean;
    joinedChannels: any[];
  };
  token:string|undefined
};

const initialState: AuthState = {
  user: {
    _id: '',
    email: '',
    // token: '',
    fullName: '',
    followers: [],
    notifications: [],
    following: [],
    joinedChannels: [],
    isOnline: false,
    role:''
    // role: '',
    // createdAt: `${new Date()}`,
  },
  token:getToken()
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      const { user } = action?.payload;
      setToken(user?.token);
      state.token=user?.token
      setUserCookies(user?.user);
    },
  },
});

export const { setAuthUser } = auth.actions;
export default auth.reducer;
