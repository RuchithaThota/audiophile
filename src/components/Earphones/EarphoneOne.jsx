import React from "react";
import { Link } from "react-router-dom";
import desktopYx1 from "../../assets/images/category-earphones/desktop/image-yx1-earphones.jpg";
import tabletYx1 from "../../assets/images/category-earphones/tablet/image-yx1-earphones.jpg";
import mobileYx1 from "../../assets/images/category-earphones/mobile/image-yx1-earphones.jpg";

function EarphoneOne() {
  return (
    <div className="lg:flex lg:items-center">
      <img
        src={desktopYx1}
        alt="yxl wireless Earphones"
        className="rounded-lg mb-8 md:hidden"
      />
      <img
        src={tabletYx1}
        alt="yxl wireless Earphones"
        className="hidden md:block md:mb-[52px] md:rounded-lg lg:hidden"
      />
      <img
        src={mobileYx1}
        alt="yxl wireless Earphones"
        className="hidden lg:block lg:rounded-lg lg:w-1/2"
      />
      <div
        className="w-full flex flex-col items-center gap-6 text-center 
  md:w-[572px] md:mx-auto md:my-0 lg:items-start lg:text-left lg:pl-32 lg:w-1/2"
      >
        <h2
          className="font-bold text-[28px] md:text-[40px] text-black uppercase 
    md:w-[360px]"
        >
          YX1 WIRELESS EARPHONES
        </h2>
        <p className="font-medium text-[15px]/7 text-custom-gray-2">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <Link
          to=""
          className="font-bold text-[13px] text-white bg-primary uppercase 
      h-12 px-10 flex items-center"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}

export default EarphoneOne;
