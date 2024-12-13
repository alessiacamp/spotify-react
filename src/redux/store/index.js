import { configureStore } from "@reduxjs/toolkit";
import musicReducers from "../reducers";

const store = configureStore({
  reducer: musicReducers,
});

export default store;
