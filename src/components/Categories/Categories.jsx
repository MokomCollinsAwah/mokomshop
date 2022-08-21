import React from "react";
import classes from "./Categories.module.css";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = (props) => {
  return (
    <div className={classes.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
