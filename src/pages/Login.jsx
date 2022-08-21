import React from "react";
import classes from "./Login.module.css";

const Register = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <h1 className={classes["form__title"]}>SIGN IN</h1>
        <form action="" className={classes["form"]}>
          <input
            type="text"
            placeholder="USERNAME"
            className={classes["form__input"]}
          />
          <input
            type="text"
            placeholder="PASSWORD"
            className={classes["form__input"]}
          />
          <button className={classes["form__btn"]}>LOGIN</button>
          <a href="#" className={classes["form__links"]}>
            DO NOT REMEMBER PASSWORD
          </a>
          <a href="#" className={classes["form__links"]}>
            CREATE A NEW ACCOUNT{" "}
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
