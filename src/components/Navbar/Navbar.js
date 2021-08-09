import { useState, useEffect } from "react";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuItem from "./MenuItem/MenuItem";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MainLogo from "../../SiteImages/mamisLogoFixedSize.jpg";
import IconComponent from "../IconComponent/IconComponent";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(`menuOpen?: ${menuOpen}`);
  }, [menuOpen]);

  const toggleMenuHandler = () => {
    setMenuOpen((prevState) => (prevState = !prevState));
  };

  let mobileNavStyle = 'MobileNavbar';
  let partialNavStyle = 'MobileRight';
  let zIndex = 0;

  if (menuOpen) {
    mobileNavStyle = mobileNavStyle +' MobileNavOpen';
    partialNavStyle = partialNavStyle + ' PartialNavOpen';
    zIndex = 10;
  }

  const closeMenuHandler = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={mobileNavStyle} style={{zIndex: zIndex}}>
        <MenuItem text={"Home"} path={"/"} onClick={closeMenuHandler} />
        <MenuItem text={"About"} path={"/about"} onClick={closeMenuHandler} />
        <MenuItem text={"Services"} path={"/services"} onClick={closeMenuHandler} />
        <MenuItem text={"Contact"} path={"/contact"} onClick={closeMenuHandler} />
      </nav>
      <nav className={partialNavStyle} style={{zIndex: zIndex}}> 
      <div className={'xBox'} onClick={closeMenuHandler}>X</div>
      </nav>
      <nav className={'navbar'}>
        <MenuTitle text={"Secretarias a Distancia"} onClick={closeMenuHandler} />
        <div className={'menuItemContainer'}>
          <MenuItem text={"Home"} path={"/"} onClick={closeMenuHandler} />
          <MenuItem text={"About"} path={"/about"} onClick={closeMenuHandler} />
          <MenuItem text={"Services"} path={"/services"} onClick={closeMenuHandler} />
          <MenuItem text={"Contact"} path={"/contact"} onClick={closeMenuHandler} />
        </div>
        <BurgerMenu onClick={toggleMenuHandler} />
      </nav>
      <IconComponent imageSource={MainLogo} />
      <div className={'mobileTitle'}>Secretarias a Distancia</div>
    </>
  );
};

export default Navbar;
