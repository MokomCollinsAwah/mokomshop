import React from "react";
import Footer from "../components/Footer/Footer";
import Annoucements from "../components/Header/Annoucements";
import Navbar from "../components/Nav/Nav";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import classes from "./ProductList.module.css";

const ProductList = () => {
  return (
    <div className={classes["container"]}>
      <Annoucements />
      <Navbar />
      <h1 className={classes["product__title"]}> Dresses</h1>
      <div className={classes["product__filter-container"]}>
        <div className={classes["product__filter"]}>
          <span className={classes["product__filter-text"]}>
            Filter Products:
          </span>
          <select name="" id="" className={classes["product__filter-select"]}>
            <option value="" disabled selected>
              Color
            </option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select name="" id="" className={classes["product__filter-select"]}>
            <option value="" disabled selected>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className={classes["product__filter"]}>
          <span className={classes["product__filter-text"]}>
            Sort Products:
          </span>
          <select name="" id="" className={classes["product__filter-select"]}>
            <option value="" disabled selected>
              Newest
            </option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
