import "./App.css";
import Header from "./components/Header";
import Home from "./components/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/checkout" Component={Checkout} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
