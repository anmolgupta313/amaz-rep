import React, { useState } from "react";
import "../Css/checkout.css";

import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/cartSlice";

function Checkout() {


  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state;
  });
  console.log(cart.basket.basket, "cartItemdf");

  function removeItem(itemId) {
    return dispatch(removeCartItem(itemId));
  }

  const calTotal = cart.basket.basket.reduce((accumulator,current) => {
    return  accumulator + current.price
  }, 0);


  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <img className="checkout-Add" src="" alt="" />
        <h2 className="checkout-title">Your Shopping Basket</h2>

        <div className="cart-Products">
          {cart.basket.basket.map((item) => {
            return (
              <div className="cart-item-sub-div">
                <img src={item.image} alt="" className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <strong>
                    {" "}
                    <p>$ {item.price}</p>
                  </strong>
                  <button
                    className="remove-item-btn"
                    value={item.id}
                    onClick={()=>{
                      const itemm= item.id
                      removeItem(itemm)
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="checkout-right">
        <div className="checkout-total-div">
          <p>
            Subotal ({cart.basket.basket.length} items) :{" "}
            <strong>$ {calTotal}</strong>
          </p>
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
