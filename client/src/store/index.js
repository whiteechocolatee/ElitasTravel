import { configureStore } from "@reduxjs/toolkit";
import planeSlice from "./plane/planeSlice";

export const store = configureStore({
  reducer: {
    planes: planeSlice,
  },
});
