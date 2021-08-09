import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <NavLink
      activeClassName={styles.active}
      className={styles.menuItem}
      to={props.path}
      onClick={props.onClick}
      exact
    >
      {props.text}
    </NavLink>
  );
};

export default MenuItem;
