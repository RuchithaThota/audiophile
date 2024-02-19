import React from "react";
import { Link } from "react-router-dom";
import "./HomeProducts.css";

function HomeProductTwo() {
  return (
    <div className="home-product-two flex flex-col gap-8 ">
      <h2 className="uppercase text-black font-bold text-[28px]">
        ZX7 SPEAKER
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
  );
}

export default HomeProductTwo;
