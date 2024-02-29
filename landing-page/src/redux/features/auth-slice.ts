import { setToken, setUserCookies } from '@/cookies/cookies';
import { createSlice } from '@reduxjs/toolkit';

// Just a boiler plate, this file needs to be updated

type AuthState = {
  user: {
    id: string;
    fullName: string;
    email: string;
    token: string;
    role: any;
    createdAt: string;
  };
};

const initialState: AuthState = {
  user: {
    id: '',
    email: '',
    token: '',
    fullName: '',
    role: '',
    createdAt: `${new Date()}`,
  },
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      const { user } = action?.payload;
      setToken(user?.token);
      setUserCookies(user?.user);
    },
  },
});

export const { setAuthUser } = auth.actions;
export default auth.reducer;
