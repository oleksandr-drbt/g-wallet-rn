import { configureStore } from '@reduxjs/toolkit';

import capitalReducer from "./capitalSlice";

const store = configureStore({
  reducer: {
    capital: capitalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
