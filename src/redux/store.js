import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    basket: cartSlice,
    user: userSlice,
  },
});

// const store = legacy_createStore(reducer);

export default store;
