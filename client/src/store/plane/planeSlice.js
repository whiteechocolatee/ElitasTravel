import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import planeService from "../services/planeService";

export const getPlane = createAsyncThunk(
  "getPlane",
  async (id, thunkAPI) => {
    try {
      return await planeService.getPlane(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.message,
      );
    }
  },
);

const planeSlice = createSlice({
  name: "plane",
  initialState: {
    plane: null,
    isLoading: false,
    isError: true,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      /* Setting the state to loading. */
      .addCase(getPlane.pending, (state) => {
        state.isLoading = true;
      })
      /* Setting the state to the payload of the action. */
      .addCase(getPlane.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plane = action.payload[0];
      })
      /* Setting the error state to the payload of the action. */
      .addCase(getPlane.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        state.plane = null;
      });
  },
});

export default planeSlice.reducer;
