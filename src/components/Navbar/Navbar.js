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

  const onClickHandler = () => {
    setMenuOpen((prevState) => (prevState = !prevState));
  };

  let mobileNavStyle = 'MobileNavbar';
  if (menuOpen) {
    mobileNavStyle = mobileNavStyle +' MobileNavOpen';
  }

  return (
    <>
      <nav className={mobileNavStyle}>
        <div style={{fontSize:20}}>X</div>
        <MenuItem text={"Home"} path={"/"} />
        <MenuItem text={"About"} path={"/about"} />
        <MenuItem text={"Services"} path={"/services"} />
        <MenuItem text={"Contact"} path={"/contact"} />
      </nav>
      <nav className={'navbar'}>
        <MenuTitle text={"Secretarias a Distancia"} />
        <div className={'menuItemContainer'}>
          <MenuItem text={"Home"} path={"/"} />
          <MenuItem text={"About"} path={"/about"} />
          <MenuItem text={"Services"} path={"/services"} />
          <MenuItem text={"Contact"} path={"/contact"} />
        </div>
        <BurgerMenu onClick={onClickHandler} />
      </nav>
      <IconComponent imageSource={MainLogo} />
      <div className={'mobileTitle'}>Secretarias a Distancia</div>
    </>
  );
};

export default Navbar;
