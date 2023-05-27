import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./reducers/mainSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
