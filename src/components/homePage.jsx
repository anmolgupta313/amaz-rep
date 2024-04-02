import React from "react";
import Banner from "../Assets/bannerOne.jpg";
import "../Css/homePage.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img src={Banner} alt="" className="banner" />

        <div className="home-row">
            <Product title="Soluna Solar Eclipse Glasses - CE and ISO Certified Safe Shades for
          Direct Sun Viewing - Made in the USA (5 Pack) - Lunettes Pour éclipse
          Solaire" image="https://m.media-amazon.com/images/I/61GkRpDddpL._AC_SX679_.jpg" price="29.99" rating={4} />
            <Product />
        </div>
        <div className="home-row">
        <Product />
        <Product />
        <Product />
        </div>
        <div className="home-row">
        <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
