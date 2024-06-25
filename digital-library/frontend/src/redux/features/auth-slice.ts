import { configureStore, createSlice } from '@reduxjs/toolkit';
import {

  getUserCookies,
  setUserCookies,
} from '@/cookies/cookies';
import AuthService from '@/services/authService';
import { useRouter } from 'next/navigation';
import {
  ILoggedInUserReturnType,
  IRegisterUser,
} from '@/services/authService.d';
import { redirect } from 'next/navigation';

// Just a boiler plate, this file needs to be updated

type AuthState = {

  loading: boolean;
  isAuthenticad: boolean;
  open: boolean;
};

const initialState: AuthState = {
 
  loading: false,
  isAuthenticad: false,
  open: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // state.user = action.payload;
      // setUserCookies(action.payload)
    },


 

    toggleFunc: (state) => {
      state.open = !state.open;
      // redirect('/');
    },

    toggleFunc2: (state, action) => {
     
        state.open = action.payload;
    
    },
  },
});

export const { login, toggleFunc, toggleFunc2 } = auth.actions;
export default auth.reducer;
