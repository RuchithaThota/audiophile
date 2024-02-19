import React from "react";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Categories from "../components/Categories";
import HomeProducts from "../components/Home/HomeProducts/HomeProducts";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div>
      <FeaturedProduct />
      <div
        className="bg-custome-white 
        w-full max-w-[1200px] mx-auto
        px-6 pt-10 pb-20 md:px-10 md:py-24
      lg:pt-[120px] lg:px-10 lg:pb-[200px] flex flex-col gap-28 "
      >
        <Categories />
        <HomeProducts />
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
