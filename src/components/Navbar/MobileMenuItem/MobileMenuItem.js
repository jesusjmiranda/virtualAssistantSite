import { NavLink } from "react-router-dom";
import styles from "./MobileMenuItem.module.css";

const MobileMenuItem = (props) => {
  return (
    <NavLink
      activeClassName={styles.active}
      className={styles.MobileMenuItem}
      to={props.path}
      onClick={props.onClick}
      exact
    >
      {props.text}
    </NavLink>
  );
};

export default MobileMenuItem;
