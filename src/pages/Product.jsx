import React from "react";
import Footer from "../components/Footer/Footer";
import Annoucements from "../components/Header/Annoucements";
import Nav from "../components/Nav/Nav";
import Newsletter from "../components/Newsletter/Newsletter";
import classes from "./Product.module.css";

import { IoMdRemove } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";

const Product = (props) => {
  return (
    <div className={classes["container"]}>
      <Annoucements />
      <Nav />
      <div className={classes["product__wrapper"]}>
        <div className={classes["product__image-container"]}>
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="jumsuit" />
        </div>
        <div className={classes["product__info-container"]}>
          <h1>Deim Jumpsuit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            laborum pariatur quae dolorem, sequi tempora expedita omnis dicta
            dolorum, autem voluptates ea magnam cumque iste doloremque, suscipit
            obcaecati voluptas illo!
          </p>
          <span>$ 20</span>
          <div className={classes["filter__container"]}>
            <div className={classes["filter"]}>
              <span className={classes["filter__title"]}>Color</span>
              <div className={classes["filter__color1"]}></div>
              <div className={classes["filter__color2"]}></div>
              <div className={classes["filter__color3"]}></div>
            </div>
            <div className={classes["filter"]}>
              <span className={classes["filter__title"]}>Size</span>
              <select name="" id="" className={classes["filter__size"]}>
                <option value="">X</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
          <div className={classes["add__container"]}>
            <div className={classes["amount__container"]}>
              <IoMdRemove />
              <span> 1 </span>
              <GrFormAdd />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
