import React from "react";
import "./HomeProducts.css";
import HomeProductOne from "./HomeProductOne";
import HomeProductTwo from "./HomeProductTwo";
import HomeProductThree from "./HomeProductThree";

function HomeProducts() {
  return (
    <div className="w-full flex flex-col gap-10">
      <HomeProductOne />
      <HomeProductTwo />
      <HomeProductThree />
    </div>
  );
}

export default HomeProducts;
