import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "../reducers/accountsReducer";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    data: accountsReducer,
  },
  middleware: [thunk]
});