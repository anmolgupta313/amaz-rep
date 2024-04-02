import React from "react";
import "../Css/Product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="product-container">
      <div className="product-info">
        <p className="title">{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>{" "}
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              <p className="rating">🌟</p>;
            })}
        </div>
      </div>

      <img src={image} alt="" className="product-Image" />

      <button className="add-to-basket-btn">Add To Basket</button>
    </div>
  );
}

export default Product;
