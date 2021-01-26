import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getWithFilter } from "../helper/service";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("spacex/all", async () => {
  const { data } = await getAll();
  return data;
});

export const fetchDataWithParam = createAsyncThunk(
  "/spacex/filtered",
  async (filter) => {
    const { data } = await getWithFilter({ filter });
    return data;
  }
);

const dataSlice = createSlice({
  name: "spacex",
  initialState,
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = state.data.concat(action.payload);
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error;
    },
    [fetchDataWithParam.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchDataWithParam.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [fetchDataWithParam.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error;
    },
  },
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { updateStatus } = dataSlice.actions;
export default dataSlice.reducer;
