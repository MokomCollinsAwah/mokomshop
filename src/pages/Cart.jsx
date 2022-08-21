import React from "react";
import NavBar from "../components/Nav/Nav";
import Announcement from "../components/Header/Annoucements";
import Footer from "../components/Footer/Footer";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import classes from "./Cart.module.css";

import IMG from "../assets/pdt.png";

const Cart = () => {
  return (
    <div className={classes["container"]}>
      <Announcement />
      <NavBar />
      <div className={classes["wrapper"]}>
        <h1 className={classes["cart__title"]}>YOUR BAG</h1>
        <div className={classes["cart__top"]}>
          <button className={classes["cart__top-btn"]}>
            CONTINUE SHOPPING
          </button>
          <div className={classes["cart__top-texts"]}>
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist(0)</span>
          </div>
          <button className={classes["cart__top-btn"]}>CHECKOUT NOW</button>
        </div>
        <div className={classes["cart__bottom"]}>
          <div className={classes["cart__info"]}>
            <div className={classes.product}>
              <div className={classes["product__details"]}>
                <img src={IMG} alt="" />
                <div className={classes.details}>
                  <span className={classes["product__name"]}>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className={classes["product__id"]}>
                    <b>ID:</b> 687987098
                  </span>
                  <span className={classes["product__size"]}>
                    <b>SIZE:</b> 687987098
                  </span>
                </div>
              </div>
              <div className={classes["product__price-details"]}>
                <div className={classes["product__amount-container"]}>
                  <AiOutlinePlus />
                  <span className={classes["product__amount"]}>2</span>
                  <AiOutlineMinus />
                </div>
                <div className={classes["product__price"]}>$ 30</div>
              </div>
            </div>
          </div>
          <div className={classes["cart__summary"]}>
            <h1>ORDER SUMMARY</h1>
            <div className={classes["summary__item"]}>
              <span className={classes["summary__item-text"]}>Subtotal</span>
              <span className={classes["summary__item-price"]}>$ 80</span>
            </div>
            <div className={classes["summary__item"]}>
              <span className={classes["summary__item-text"]}>
                Estimated Shipping
              </span>
              <span className={classes["summary__item-price"]}>$ 5.90</span>
            </div>
            <div className={classes["summary__item"]}>
              <span className={classes["summary__item-text"]}>
                Shipping Discount
              </span>
              <span className={classes["summary__item-price"]}>$ -5.90</span>
            </div>
            <div className={classes["summary__item"]}>
              <span className={classes["summary__item-text"]}>Total</span>
              <span className={classes["summary__item-price"]}>$ 80</span>
            </div>
            <button>CHECK OUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
