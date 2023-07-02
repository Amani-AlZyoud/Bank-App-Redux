import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accountsReducer";

export default configureStore({
  reducer: {
     ACCOUNTS: accountsReducer,
  },
});