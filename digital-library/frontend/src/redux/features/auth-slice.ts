import { configureStore, createSlice } from '@reduxjs/toolkit';
// Just a boiler plate, this file needs to be updated

type AuthState = {
  loading: boolean;
  isAuthenticated: boolean;
  open: boolean;
  toggle: boolean
  itemActiveName: string;
  responseData: any;
  cathegoryName: string;
  modificationDate: string;
};

const initialState: AuthState = {
  itemActiveName: '',
  loading: false,
  isAuthenticated: false,
  open: false,
  toggle: true,
  responseData: [],
  cathegoryName: '',
  modificationDate: '',
};

export const auth = createSlice({
  name: "auth",
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
    toggleSideBarFunc2: (state) => {
      state.toggle = !state.toggle;
    },
    setActiveItemName: (state, action) => {
      state.itemActiveName = action.payload;
    },
    setResponseData: (state, action) => {
      state.responseData = action.payload;
    },

    setCathegoryName: (state, action) => {
      state.cathegoryName = action.payload;
    },
    setModificationDate: (state, action) => {
      state.modificationDate = action.payload;
    }
  },
});

export const { login, toggleFunc, toggleFunc2, toggleSideBarFunc2, setActiveItemName, setResponseData, setCathegoryName, setModificationDate } = auth.actions;
export default auth.reducer;
