import React from "react";
import { Link } from "react-router-dom";
import { scrollTop } from "../utils/scrollTop";
import logo from "../assets/images/shared/desktop/logo.svg";
import menuIcon from "../assets/images/shared/tablet/icon-hamburger.svg";
import cartIcon from "../assets/images/shared/desktop/icon-cart.svg";
import NavLinks from "./Reuse/NavLinks";

function Header() {
  //JSX
  return (
    <div className="bg-custom-gray w-full fixed top-0 z-10 md:px-10">
      <div
        className="h-[96px] w-full max-w-[1109px] mx-auto my-0 flex items-center 
        justify-center relative border-b border-gray-800 
        md:justify-start lg:justify-center">
        <button className="absolute left-6 md:relative md:mr-10 md:left-0 lg:hidden">
          <img src={menuIcon} alt="menuIcon" />
        </button>
        <Link to="/" onClick={scrollTop}>
          <img
            src={logo}
            alt="logo"
            className="lg:absolute lg:left-0 cursor-pointer"
          />
        </Link>
        <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-8">
          <NavLinks />
        </ul>
        <button className="absolute right-6 md:right-0">
          <img src={cartIcon} alt="cartIcon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
