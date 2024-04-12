import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import  { persistor, store } from "./redux/store";

import { PersistGate } from 'redux-persist/integration/react';
// import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
      <App />
    {/* </StateProvider> */}
    </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
