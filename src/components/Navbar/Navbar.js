import { useState, useEffect }from "react";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuItem from "./MenuItem/MenuItem";

import BurgerMenu from "../BurgerMenu/BurgerMenu"
import MainLogo from '../../mamisLogoFixedSize.jpg'
import IconComponent from '../IconComponent/IconComponent'

import styles from "./Navbar.module.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    console.log(`menuOpen?: ${menuOpen}`)
  }, [menuOpen])

  const onClickHandler = () => {
    setMenuOpen((prevState) => prevState = !prevState) 
  }

  return (
    <>
    <nav className={styles.navbar}>
      <MenuTitle text={"Secretarias a Distancia"}/>
      <div className={styles.menuItemContainer}>
        <MenuItem text={"Home"} path={"/"} />
        <MenuItem text={"About"} path={"/about"} />
        <MenuItem text={"Services"} path={"/services"} />
        <MenuItem text={"Contact"} path={"/contact"} />
      </div>
      <BurgerMenu onClick={onClickHandler} />
    </nav>
    <IconComponent imageSource={MainLogo}/>
    <div className={styles.mobileTitle}>Secretarias a Distancia</div>
    </>
  );
};

export default Navbar;
