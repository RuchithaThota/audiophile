import React from "react";
import circlePattern from "../../assets/images/home/desktop/pattern-circles.svg";
import homeProductOne from "../../assets/images/home/desktop/image-speaker-zx9.png";
import { Link } from "react-router-dom";
import "./HomeProducts.css";

function HomeProducts() {
  return (
    <div className="w-full flex flex-col">
      <HomeProductOne />
    </div>
  );
}

export default HomeProducts;

const HomeProductOne = () => {
  return (
    <div className="home-product-one">
      <div className="w-fit mx-auto my-0 lg:flex lg:h-full lg:overflow-hidden">
        <img
          src={homeProductOne}
          alt="speaker-zx9"
          className="w-[10.7rem] mb-8 md:w-[12.325rem] lg:w-full lg:my-auto lg:mx-0
        xl:bottom-[-1rem] xl:mt-auto xl:mb-0 xl:mx-0 xl:relative
          "
        />
      </div>
      <div className="mx-auto flex flex-col items-center gap-6 md:w-[21rem] lg:items-start">
        <h2
          className="uppercase font-bold font-manrope text-center text-white 
        text-4xl/[50px] md:text-[3.5rem]/[80px] lg:text-left"
        >
          ZX9 SPEAKER
        </h2>
        <p
          className="text-center text-custom-white-2 font-medium text-[15px]/6
        lg:text-left
        "
        >
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          to=""
          className="text-white font-manrope uppercase font-medium text-[13px]
          bg-black h-12 px-10 flex items-center transition-bg ease-in-out duration-300 lg:hover:bg-custom-white-2"
        >
          See Product
        </Link>
      </div>
    </div>
  );
};
