import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/auth-slice';

export const store = configureStore({
  reducer: { AuthReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
