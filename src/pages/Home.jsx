import React from "react";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Categories from "../components/Category/Categories";
import HomeProducts from "../components/Home/HomeProducts";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div>
      <FeaturedProduct />
      <div
        className="bg-custome-white px-6 pt-10 pb-20 md:px-10 md:py-24
      lg:pt-[120px] lg:px-10 lg:pb-[200px]  "
      >
        <Categories />
        <HomeProducts />
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
