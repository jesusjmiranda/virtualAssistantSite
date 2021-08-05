import styles from "./FooterBanner.js.module.css";
import MenuItem from "../Navbar/MenuItem/MenuItem";
import { FaMailBulk } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterBanner = (props) => {
  return (
    <>
      <div className={styles.FooterBanner}>
        <div className={styles.Links}>
          {/*LINKS HERE*/}
          <MenuItem text={"Home"} path={"/"} />
          <MenuItem text={"About"} path={"/about"} />
          <MenuItem text={"Services"} path={"/services"} />
          <MenuItem text={"Contact"} path={"/contact"} />
        </div>
        <div className={styles.IconContainer}><FaMailBulk className={styles.icon}/><FaFacebook className={styles.icon}/><FaInstagram className={styles.icon}/></div>
        <div className={styles.Trademark}>© VIRTUAL NIVIA CREATIVE INC. </div>
      </div>
    </>
  );
};

export default FooterBanner;
