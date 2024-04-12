import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     basket: cartSlice,
//     user: userSlice,
//   },
// });

// const store = legacy_createStore(reducer);
