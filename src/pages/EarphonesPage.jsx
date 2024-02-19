import React from "react";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import CategoryTitle from "../components/CategoryTitle";
import EarphoneOne from "../components/Earphones/EarphoneOne";

function EarphonesPage() {
  return (
    <div>
      <CategoryTitle title={"Earphones"} />
      <div
        className="bg-custome-white 
        w-full max-w-[1200px] mx-auto
        px-6 pt-10 pb-20 md:px-10 md:py-24
      lg:pt-[120px] lg:px-10 lg:pb-[200px] flex flex-col gap-28 "
      >
        <EarphoneOne />
        <Categories />
        <AboutUs />
      </div>
    </div>
  );
}

export default EarphonesPage;
