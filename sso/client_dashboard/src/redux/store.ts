import { configureStore } from "@reduxjs/toolkit";
import setModuleId from "./features/module";

export const store = configureStore({
  reducer: {
    setModuleId,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
