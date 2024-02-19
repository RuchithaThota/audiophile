import React from "react";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import CategoryTitle from "../components/CategoryTitle";
import HeadphoneOne from "../components/Headphones/HeadphoneOne";
import HeadphoneTwo from "../components/Headphones/HeadphoneTwo";
import HeadphoneThree from "../components/Headphones/HeadphoneThree";

function HeadphonesPage() {
  return (
    <div>
      <CategoryTitle title={"Headphones"} />
      <div
        className="bg-custome-white 
        w-full max-w-[1200px] mx-auto
        px-6 pt-10 pb-20 md:px-10 md:py-24
      lg:pt-[120px] lg:px-10 lg:pb-[200px] flex flex-col gap-28 "
      >
        <HeadphoneOne />
        <HeadphoneTwo />
        <HeadphoneThree />
        <Categories />
        <AboutUs />
      </div>
    </div>
  );
}

export default HeadphonesPage;
