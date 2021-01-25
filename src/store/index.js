import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/spacex";

export default configureStore({
  reducer: {
    spacex: dataReducer,
  },
});
