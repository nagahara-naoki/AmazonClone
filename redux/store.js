import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
