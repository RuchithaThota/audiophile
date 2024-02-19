import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Categories from "../components/Categories/Categories";
import CategoryTitle from "../components/Categories/CategoryTitle";

function CategoryLayout() {
  const location = useLocation();
  const currentCategory = location.pathname.split("/")[2];

  return (
    <div>
      <CategoryTitle title={currentCategory} />
      <div
        className="bg-custome-white 
    w-full max-w-[1200px] mx-auto
    px-6 pt-10 pb-20 md:px-10 md:py-24
  lg:pt-[120px] lg:px-10 lg:pb-[200px] flex flex-col gap-28 "
      >
        <Outlet />
        <Categories />
        <AboutUs />
      </div>
    </div>
  );
}

export default CategoryLayout;
