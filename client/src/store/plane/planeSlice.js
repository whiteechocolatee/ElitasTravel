import { createSlice } from "@reduxjs/toolkit";

const planeSlice = createSlice({
  name: "planes",
  initialState: {
    planes: null,
    isLoading: false,
    isError: false,
    message: "",
  },
});

export default planeSlice.reducer;
