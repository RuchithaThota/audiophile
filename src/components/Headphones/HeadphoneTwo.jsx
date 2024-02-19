import React from "react";
import desktopXx99One from "../../assets/images/category-headphones/desktop/image-xx99-mark-one.jpg";
import tabletXx99One from "../../assets/images/category-headphones/tablet/image-xx99-mark-one.jpg";
import mobileXx99One from "../../assets/images/category-headphones/mobile/image-xx99-mark-one.jpg";
import { Link } from "react-router-dom";

function HeadphoneTwo() {
  return (
    <div className="lg:flex lg:items-center">
      <img
        src={mobileXx99One}
        alt="xx99-mark-one Headphones"
        className="rounded-lg mb-8 md:hidden"
      />
      <img
        src={tabletXx99One}
        alt="xx99-mark-one Headphones"
        className="hidden md:block md:mb-[52px] md:rounded-lg lg:hidden"
      />
      <img
        src={desktopXx99One}
        alt="xx99-mark-one Headphones"
        className="hidden lg:block lg:rounded-lg lg:w-1/2 lg:order-2"
      />
      <div
        className="w-full flex flex-col items-center gap-6 text-center 
      md:w-[572px] md:mx-auto md:my-0 lg:items-start lg:text-left lg:pr-32 lg:w-1/2  "
      >
        <h2
          className="font-bold text-[28px] md:text-[40px] text-black uppercase 
        md:w-[360px]"
        >
          XX99 MARK I HEADPHONES
        </h2>
        <p className="font-medium text-[15px]/7 text-custom-gray-2">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
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

export default HeadphoneTwo;
