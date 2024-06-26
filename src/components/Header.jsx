import React from "react";
import "../Css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";

function Header() {
  
  //   const userStorage= localStorage.getItem("persist:root")

  //   const userJson= JSON.parse(userStorage)|| []

  //   console.log(userJson,"json")
  // const valueToRemove= "user"
const navigate= useNavigate()
  // const filterUser= userJson.filter(item=> item !=valueToRemove)
const checkoutPageNavigate= ()=>{
  navigate("/checkout")
}
const homePageNavi= ()=>{
  navigate('/')
}
  const cart = useSelector((state) => {
    return state.basket.basket;
  });

  const user = useSelector((state) => {
    return state.user;
  });

  const handleAuthentication = () => {
    if (user.user.loginInput) {
      // filterUser()
      localStorage.removeItem("persist:root");
      return auth.signOut();
    }
  };

  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo with arrow"  
        onClick={homePageNavi}
      />
      <div className="header-search">
        <input type="text" name="" id="" className="header-serach-input" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to="/login">
          {" "}
          <div className="header-option">
            <span className="header-option-line-one">
              Hello{" "}
              {user.user.loginInput ? user.user.loginInput.email : "Guest"}{" "}
            </span>
            <span
              className="header-option-line-two"
              onClick={handleAuthentication}
            >
              {user.user.loginInput ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Prime</span>
        </div>

        <div className="header-option-basket" onClick={checkoutPageNavigate}>
          <ShoppingBasketIcon className="header-shopping-cart-icon" />
          <span className="header-option-line-two header-basket-count ">
            {cart.basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
