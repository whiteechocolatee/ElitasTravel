import { configureStore } from "@reduxjs/toolkit";
import planeSlice from "./plane/planesSlice";

export const store = configureStore({
  reducer: {
    planes: planeSlice,
  },
});
