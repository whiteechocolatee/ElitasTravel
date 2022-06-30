import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import planeService from "../services/planeService";

/* Creating a thunk that will be used to make an async call to the server. */

export const getPlanes = createAsyncThunk(
  "getPlanes",
  async (_, thunkAPI) => {
    try {
      return await planeService.getPlanes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const planesSlice = createSlice({
  name: "planes",
  initialState: {
    planes: null,
    isLoading: false,
    isError: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      /* Setting the state loader to true. */
      .addCase(getPlanes.pending, (state) => {
        state.isLoading = true;
      })
      /* Setting the state to the payload of the action. */
      .addCase(getPlanes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.planes = action.payload;
      })
      /* Setting the state to the error message. */
      .addCase(getPlanes.rejected, (state, action) => {
        state.isLoading = false;
        state.planes = null;
        state.isError = action.error.message;
      });
  },
});

export default planesSlice.reducer;
