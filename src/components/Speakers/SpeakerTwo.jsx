import React from "react";
import desktopZX9 from "../../assets/images/category-speakers/desktop/image-zx9.jpg";
import tabletZX9 from "../../assets/images/category-speakers/tablet/image-zx9.jpg";
import mobileZX9 from "../../assets/images/category-speakers/mobile/image-zx9.jpg";
import { Link } from "react-router-dom";

function SpeakerTwo() {
  return (
    <div className="lg:flex lg:items-center">
      <img
        src={mobileZX9}
        alt="ZX9 Speaker"
        loading="lazy"
        className="rounded-lg mb-8 md:hidden"
      />
      <img
        src={tabletZX9}
        alt="ZX9 Speaker"
        loading="lazy"
        className="hidden md:block md:mb-[52px] md:rounded-lg lg:hidden"
      />
      <img
        src={desktopZX9}
        alt="ZX9 Speaker"
        loading="lazy"
        className="hidden lg:block lg:rounded-lg lg:w-1/2 lg:order-2"
      />
      <div
        className="w-full flex flex-col items-center gap-6 text-center 
  md:w-[572px] md:mx-auto md:my-0 lg:items-start lg:text-left lg:pr-32 lg:w-1/2   "
      >
        <p className="font-medium text-[14px] text-primary uppercase tracking-[0.5rem]">
          New Product
        </p>
        <h2
          className="font-bold text-[28px] md:text-[40px] text-black uppercase 
    md:w-[360px]"
        >
          ZX9 SPEAKER
        </h2>
        <p className="font-medium text-[15px]/7 text-custom-gray-2">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
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

export default SpeakerTwo;
