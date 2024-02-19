import React from "react";
import desktopXx59 from "../../assets/images/category-headphones/desktop/image-xx59.jpg";
import tabletXx59 from "../../assets/images/category-headphones/tablet/image-xx59.jpg";
import mobileXx59 from "../../assets/images/category-headphones/mobile/image-xx59.jpg";
import { Link } from "react-router-dom";

function HeadphoneOne() {
  return (
    <div className="lg:flex lg:items-center">
      <img
        src={mobileXx59}
        alt="xx59 Headphones"
        loading="lazy"
        className="rounded-lg mb-8 md:hidden"
      />
      <img
        src={tabletXx59}
        alt="xx59 Headphones"
        loading="lazy"
        className="hidden md:block md:mb-[52px] md:rounded-lg lg:hidden"
      />
      <img
        src={desktopXx59}
        alt="xx59 Headphones"
        loading="lazy"
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
          XX59 HEADPHONES
        </h2>
        <p className="font-medium text-[15px]/7 text-custom-gray-2">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
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

export default HeadphoneOne;
