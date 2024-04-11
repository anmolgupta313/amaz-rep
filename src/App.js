import "./App.css";
import Header from "./components/Header";
import Home from "./components/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./components/login";
import { useEffect } from "react";
import { auth } from "./firebase";
import Signup from "./components/signUp";

function App() {

  useEffect(()=>{
auth.onAuthStateChanged(authUser=>{
  console.log(authUser)
})
  },[])
  return (
   
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" Component={Home} />

            <Route path="/checkout" Component={Checkout} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
