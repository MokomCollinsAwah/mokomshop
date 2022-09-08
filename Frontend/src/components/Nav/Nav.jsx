import React from "react";
import classes from "./Nav.module.css";

import { Badge } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Nav = () => {
  return (
    <div className={classes["nav__container"]}>
      <div className={classes["nav__wrapper"]}>
        <div className={classes["nav__container-left"]}>
          <p className={classes.language}>EN</p>
          <div className={classes["search__container"]}>
            <input
              type="text"
              placeholder="search"
              className={classes.search}
            />
            <BsSearch />
          </div>
        </div>
        <div className={classes["nav__container-center"]}>
          <h1 className={classes.logo}>MOKOM.</h1>
        </div>
        <div className={classes["nav__container-right"]}>
          <p className={classes["nav__menu-item"]}>REGISTER</p>
          <p className={classes["nav__menu-item"]}>SIGN IN</p>
          <p className={classes["nav__menu-item"]}>
            <Badge badgeContent={4} color="primary">
              <AiOutlineShoppingCart size={25} />
            </Badge>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
