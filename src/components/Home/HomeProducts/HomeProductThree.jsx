import React from "react";
import desktopProductThree from "../../../assets/images/home/desktop/image-earphones-yx1.jpg";
import tabletProductThree from "../../../assets/images/home/tablet/image-earphones-yx1.jpg";
import mobileProductThree from "../../../assets/images/home/mobile/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

function HomeProductThree() {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-8">
      <img
        src={mobileProductThree}
        alt="earphones yx1"
        className="rounded-lg mb-6 md:hidden"
      />
      <img
        src={tabletProductThree}
        alt="earphones yx1"
        className="rounded-lg hidden md:block lg:hidden"
      />
      <img
        src={desktopProductThree}
        alt="earphones yx1"
        className="rounded-lg hidden lg:block"
      />
      <div
        className="bg-custom-cat rounded-lg py-10 px-6 md:flex md:flex-col md:justify-center md:p-8
      lg:py-10 lg:px-24
      "
      >
        <h2 className="uppercase text-black font-bold text-[28px] mb-8">
          YX1 EARPHONES
        </h2>
        <Link
          to=""
          className="border-2 border-black w-fit h-12 flex items-center px-[30px] 
        uppercase text-[13px] font-bold
        transition-colors ease-in-out duration-300
        lg:hover:bg-black lg:hover:text-custom-white"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}

export default HomeProductThree;
