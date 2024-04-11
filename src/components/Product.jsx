import React from "react";
import "../Css/Product.css";
// import { useStateValue } from "../stateProvider";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../redux/action";
import { addtoCart } from "../redux/cartSlice";

function Product({ title, image, price, rating }) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(addtoCart({ title, price, image }));
  }
  const cart = useSelector((state) => {
    return state;
  });

  console.log(cart, "cart");
  return (
    <div className="product-container">
      <div className="product-info">
        <p className="title">{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>{" "}
        </p>
        <div className="product-rating">
          {/* {Array(rating)
            .fill()
            .map((_, i) => {
   
            })} */}
          <p className="rating">🌟</p>
        </div>
      </div>

      <img src={image} alt="" className="product-Image" />

      <button className="add-to-basket-btn" onClick={onClick}>
        Add To Basket
      </button>
    </div>
  );
}

export default Product;
