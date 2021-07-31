import { useState, useEffect }from "react";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Navbar.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    console.log(`menuOpen?: ${menuOpen}`)
  }, [menuOpen])

  const onClickHandler = () => {
    setMenuOpen((prevState) => prevState = !prevState) 
  }

  return (
    <nav className={styles.navbar}>
      <MenuTitle text={"Secretarias a Distancia"}/>
      <div className={styles.menuItemContainer}>
        <MenuItem text={"About"} path={"/about"} />
        <MenuItem text={"Résumé"} path={"/resume"} />
        <MenuItem text={"Contact"} path={"/contact"} />
      </div>
      <BurgerMenu onClick={onClickHandler} />
    </nav>
  );
};

export default Navbar;
