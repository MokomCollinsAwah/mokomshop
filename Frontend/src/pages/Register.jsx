import React from "react";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <h1 className={classes["form__title"]}>CREATE AN ACCOUNT</h1>
        <form action="" className={classes["form"]}>
          <input
            type="text"
            placeholder="first name"
            className={classes["form__input"]}
          />
          <input
            type="text"
            placeholder="last name"
            className={classes["form__input"]}
          />
          <input
            type="text"
            placeholder="username"
            className={classes["form__input"]}
          />
          <input
            type="text"
            placeholder="email"
            className={classes["form__input"]}
          />
          <input
            type="text"
            placeholder="password"
            className={classes["form__input"]}
          />
          <input
            type="text"
            placeholder="confirm password"
            className={classes["form__input"]}
          />
          <div className={classes["form__agreement"]}>
            By creating an account, I consent to the processing of mu personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button className={classes["form__btn"]}>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
