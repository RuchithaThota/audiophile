import React from "react";
import "./HomeProducts.css";
import HomeProductOne from "./HomeProductOne";
import HomeProductTwo from "./HomeProductTwo";

function HomeProducts() {
  return (
    <div className="w-full flex flex-col gap-10">
      <HomeProductOne />
      <HomeProductTwo />
    </div>
  );
}

export default HomeProducts;
