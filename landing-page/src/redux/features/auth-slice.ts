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
    login: (state, action) => {},
  },
});

export const { login } = auth.actions;
export default auth.reducer;
