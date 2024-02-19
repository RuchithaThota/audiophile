import React from "react";
import desktopHero from "../../assets/images/home/desktop/image-hero.png";
import tabletHero from "../../assets/images/home/tablet/image-hero.png";
import mobileHero from "../../assets/images/home/mobile/image-hero.png";
import { Link } from "react-router-dom";

function FeaturedProduct() {
  return (
    <div className="bg-custom-gray w-full relative">
      <img
        src={mobileHero}
        alt="heroImage"
        className="w-full h-full block align-middle md:hidden"
        loading="lazy"
      />
      <img
        src={tabletHero}
        alt="heroImage"
        className="hidden md:block lg:hidden md:w-full md:h-full md:align-middle"
        loading="lazy"
      />
      <img
        src={desktopHero}
        alt="heroImage"
        className="hidden lg:block lg:w-full lg:h-full lg:align-middle"
        loading="lazy"
      />
      <div
        className="max-w-[1109px] w-full
        h-[calc(100%_-_5.625rem)]
        absolute left-[50%] translate-x-[-50%] top-[5.625rem]
        lg:top-[6rem] lg:h-[calc(100%_-_6rem)]
        flex justify-center items-center px-12 lg:justify-start xl:px-0  "
      >
        <div className="flex flex-col items-center text-center text-custom-white lg:items-start lg:text-left">
          <p
            className="text-custom-white-2 uppercase
            text-[14px] tracking-[.625rem] font-normal font-manrope leading-5"
          >
            New Product
          </p>
          <h1
            className="mt-4 mb-6 text-custom-white uppercase font-bold font-manrope text-4xl/[50px]
          tracking-[.08rem] md:my-6  md:tracking-0  md:block   md:w-[400px] md:text-[56px] md:leading-snug
      "
          >
            XX99 MARK II HEADPHONES
          </h1>
          <p
            className="text-custom-white-2 text-center text-[15px]
            font-medium  leading-[1.5625rem] font-manrope md:w-[350px] lg:text-left"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to=""
            className="mt-7 md:mt-10
            flex items-center 
        border-2 border-btn-primary
      bg-btn-primary w-fit uppercase text-[13px]
      font-bold h-12 px-8 transition-opacity ease-in-out duration-300 
      lg:hover:bg-btn-primary/50
lg:hover:border-btn-primary/50 lg:hover:border
      "
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
