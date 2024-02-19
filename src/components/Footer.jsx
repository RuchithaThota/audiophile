import React from "react";
import logo from "../assets/images/shared/desktop/logo.svg";
import facebookIcon from "../assets/images/shared/desktop/icon-facebook.svg";
import xIcon from "../assets/images/shared/desktop/icon-twitter.svg";
import instaIcon from "../assets/images/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  //navLinks
  const navLinks = [
    ["Home", "/"],
    ["Headphones", "/"],
    ["Speakers", "/"],
    ["Earphones", "/"],
  ];
  return (
    <div
      className="bg-custom-gray px-6 pb-8
      md:px-10"
    >
      <div className="w-full max-w-[1109px] mx-auto relative ">
        <hr
          className="bg-footer-line w-[100px] h-[4px] mb-12 mx-auto border-none
        md:ml-0 md:mr-auto
        "
        />
        <div
          className="flex flex-col justify-center items-center gap-12
        md:items-start lg:flex-row lg:justify-between
        "
        >
          <img src={logo} alt="logo" />
          <ul
            className="flex  items-center flex-col gap-4 md:gap-8
          md:flex-row
          "
          >
            {navLinks.map(([title, url]) => {
              return (
                <li>
                  <Link
                    to={url}
                    className="
                    text-custom-white font-manrope text-[13px]/6 font-bold uppercase 
                    transition-colors ease-in-out duration-300 hover:text-orange-400"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-[560px]">
          <p
            className="text-custom-white-2 text-center text-[16px]/6 my-12
          md:text-left md:mb-20 md:mt-9 lg:mb-12
          "
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <p className="text-custom-white-2 text-center md:text-left">
          Copyright 2021. All Rights Reserved
        </p>
        <div
          className="flex justify-center items-center gap-4 mt-12
       md:absolute md:bottom-0 md:right-0 md:mt-0 md:w-fit lg:bottom-auto lg:top-[50%]
       lg:translate-y-[50%]
        "
        >
          <img
            src={facebookIcon}
            alt="facebookIcon"
            className="cursor-pointer"
          />
          <img src={xIcon} alt="xIcon" className="cursor-pointer" />
          <img src={instaIcon} alt="instaIcon" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
