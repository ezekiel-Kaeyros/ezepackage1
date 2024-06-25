import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './features/auth-slice';
import AddDocument from './features/addDocument-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';




export const store = configureStore({
  reducer: {
    AuthReducer,

    AddDocument,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
