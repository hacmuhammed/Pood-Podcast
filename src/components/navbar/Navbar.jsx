import React from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#podcast">Poadcast</a>
      </p>
      <p>
        <a href="#kategoriler">Kategoriler</a>
      </p>
      <p>
        <a href="#fiyat">Fiyatlandırma</a>
      </p>
      <p>
        <a href="#iletisim">İletişim</a>
      </p>
    </>
  );
};

const Navbar = () => {
  // const [scrolled, setScrolled] = React.useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 1) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // });

  // let poodNavbarClasses = ["pood__navbar-container"];
  // if (scrolled) {
  //   poodNavbarClasses.push("scrolled");
  // }
  //aslo add this line to navbar className={poodNavbarClasses.join(" ")}
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="pood__navbar-container">
        <div className="pood__navbar-links__container">
          <div className="pood__navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="pood__navbar-elements">
            <div className="pood__navbar-links">
              <Menu />
            </div>
            <div className="pood__navbar-sign">
              <button type="button">
                <p className="gradient__text">Kayıt ol</p>
              </button>
            </div>
          </div>
        </div>
        <div className="pood__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              style={{ color: "var(--color-secondary)" }}
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              style={{ color: "var(--color-secondary)" }}
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="pood__navbar-menu_container scale-up-center">
              <div className="pood__navbar-menu_container-links">
                <Menu />
              </div>
              <div className="pood__navbar-menu_container-links-sign">
              <button type="button">
                <p>Kayıt ol</p>
              </button>
            </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
