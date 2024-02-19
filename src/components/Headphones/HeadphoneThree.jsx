import React from "react";
import desktopXx99Two from "../../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg";
import tabletXx99Two from "../../assets/images/category-headphones/tablet/image-xx99-mark-two.jpg";
import mobileXx99Two from "../../assets/images/category-headphones/mobile/image-xx99-mark-two.jpg";
import { Link } from "react-router-dom";

function HeadphoneThree() {
  return (
    <div className="lg:flex lg:items-center">
      <img
        src={mobileXx99Two}
        alt="xx99-mark-two Headphones"
        className="rounded-lg mb-8 md:hidden"
      />
      <img
        src={tabletXx99Two}
        alt="xx99-mark-two Headphones"
        className="hidden md:block md:mb-[52px] md:rounded-lg lg:hidden"
      />
      <img
        src={desktopXx99Two}
        alt="xx99-mark-two Headphones"
        className="hidden lg:block lg:rounded-lg lg:w-1/2"
      />
      <div
        className="w-full flex flex-col items-center gap-6 text-center 
      md:w-[572px] md:mx-auto md:my-0 lg:items-start lg:text-left lg:pl-32 lg:w-1/2  "
      >
        <p className="font-medium text-[14px] text-primary uppercase tracking-[0.5rem]">
          New Product
        </p>
        <h2
          className="font-bold text-[28px] md:text-[40px] text-black uppercase 
        md:w-[360px]"
        >
          XX99 MARK II HEADPHONES
        </h2>
        <p className="font-medium text-[15px]/7 text-custom-gray-2">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
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

export default HeadphoneThree;
