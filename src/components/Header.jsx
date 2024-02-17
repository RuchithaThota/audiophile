import React from "react";
import logo from "../assets/images/shared/desktop/logo.svg";
import menuIcon from "../assets/images/shared/tablet/icon-hamburger.svg";
import cartIcon from "../assets/images/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

function Header() {
  //navLinks
  const navLinks = [
    ["Home", "/"],
    ["Headphones", "/"],
    ["Speakers", "/"],
    ["Earphones", "/"],
  ];
  //JSX
  return (
    <div className="bg-custom-gray md:px-10">
      <div
        className="h-[90px] w-full max-w-[1109px] mx-auto my-0 flex items-center 
    justify-center relative border-b border-gray-800 
    md:justify-start lg:justify-center   
    "
      >
        <button className="absolute left-8 md:relative md:mr-10 md:left-0 lg:hidden">
          <img src={menuIcon} alt="menuIcon" />
        </button>
        <img
          src={logo}
          alt="logo"
          className="lg:absolute lg:left-8 cursor-pointer"
        />
        <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-8">
          {navLinks.map(([title, url]) => {
            return (
              <li>
                <Link
                  to={url}
                  className="
    text-custom-white font-manrope text-[13px]/6 font-semibold uppercase 
    transition-colors ease-in-out duration-300 hover:text-orange-400"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="absolute right-8">
          <img src={cartIcon} alt="cartIcon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
