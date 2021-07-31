import { NavLink } from "react-router-dom";

import styles from "./MenuTitle.module.css";

const MenuTitle = (props) => {
  return (
    <NavLink className={styles.menuTitle} to={"/"}>
      {props.text}
    </NavLink>
  );
};

export default MenuTitle;
