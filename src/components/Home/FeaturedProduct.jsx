import React, { useCallback, useEffect, useState } from "react";
import desktopHero from "../../assets/images/home/desktop/image-hero.png";
import tabletHero from "../../assets/images/home/tablet/image-hero.png";
import mobileHero from "../../assets/images/home/mobile/image-hero.png";

function FeaturedProduct() {
  const [imgUrl, setImgUrl] = useState(mobileHero);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const handleResize = useCallback(() => {
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setWindowWidth(window.screen.width);
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (windowWidth < 768) {
      setImgUrl(mobileHero);
    } else if (windowWidth < 1024) {
      setImgUrl(tabletHero);
    } else {
      setImgUrl(desktopHero);
    }
  }, [windowWidth]);
  return (
    <div className="bg-custom-gray w-full relative">
      <img
        src={imgUrl}
        alt="heroImage"
        className="w-full h-full block align-middle
      lg:mt-24 xl:mt-0"
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
          <button
            className="mt-7 md:mt-10
        border-2 border-btn-primary
      bg-btn-primary w-fit uppercase text-[13px]
      font-bold h-12 px-8 font-manrope
      transition-bg ease-in-out duration-300
      hover:bg-btn-primary-hv hover:border-btn-primary-hv
      "
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
