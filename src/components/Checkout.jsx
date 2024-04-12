import React from "react";
import "../Css/checkout.css";

import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => {
    return state;
  });
  console.log(cart.basket.basket, "cartItemdf");
  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <img
          className="checkout-Add"
          src=""
          alt=""
        />
        <h2 className="checkout-title">Your Shopping Basket</h2>
      </div>
      <div className="checkout-right">
        <div className="checkout-total-div">
          <p>Subotal (0items) : 0</p>
          <div className="checkbox-gift">
            <input type="checkbox" name="" id="" />{" "}
            <p>This order contains a gift</p>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
