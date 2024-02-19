import React from "react";
import desktopZX7 from "../../assets/images/category-speakers/desktop/image-zx7.jpg";
import tabletZX7 from "../../assets/images/category-speakers/tablet/image-zx7.jpg";
import mobileZX7 from "../../assets/images/category-speakers/mobile/image-zx7.jpg";
import { Link } from "react-router-dom";

function SpeakerOne() {
  return (
    <div className="lg:flex lg:items-center">
      <img
        src={mobileZX7}
        alt="ZX7 Speaker"
        loading="lazy"
        className="rounded-lg mb-8 md:hidden"
      />
      <img
        src={tabletZX7}
        alt="ZX7 Speaker"
        loading="lazy"
        className="hidden md:block md:mb-[52px] md:rounded-lg lg:hidden"
      />
      <img
        src={desktopZX7}
        alt="ZX7 Speaker"
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
          ZX7 SPEAKER
        </h2>
        <p className="font-medium text-[15px]/7 text-custom-gray-2">
          Stream high quality sound wirelessly with minimal to no loss. The ZX7
          speaker uses high-end audiophile components that represents the top of
          the line powered speakers for home or studio use.
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

export default SpeakerOne;
