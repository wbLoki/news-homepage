import React, { useState } from "react";
import "../styles/header.css";
import logo from "../images/logo.svg";
import menuOpen from "../images/icon-menu.svg";
import menuClose from "../images/icon-menu-close.svg";

function Header() {
  const [menu, setMenu] = useState(menuOpen);
  const [menuStyle, setMenuStyle] = useState("menu");
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenu = () => {
    if (!menuToggle) {
      setMenu(menuClose);
      setMenuStyle("menu translate-x-0");
    } else {
      setMenuStyle("menu");
      setMenu(menuOpen);
    }
    setMenuToggle(!menuToggle);
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" className="w-10 sm:w-14" />
      <button
        aria-controls="main-menu"
        aria-expanded="false"
        className="main-menu-toggle"
        onClick={toggleMenu}
      >
        <img src={menu} alt="logo" className="w-8" />
      </button>

      {menuToggle ? (
        <div className="shade-effect" onClick={toggleMenu} on></div>
      ) : (
        ""
      )}
      <nav>
        <ul id="main-menu" className={menuStyle}>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
