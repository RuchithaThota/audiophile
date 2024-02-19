import React from "react";
import { Link } from "react-router-dom";
import { scrollTop } from "../utils/scrollTop";
import arrowRightIcon from "../assets/images/shared/desktop/icon-arrow-right.svg";
import headphones from "../assets/images/shared/desktop/image-headphones.png";
import earphones from "../assets/images/shared/desktop/image-earphones.png";
import speakers from "../assets/images/shared/desktop/image-speakers.png";

function Categories() {
  //categories
  const categories = [
    { image: headphones, title: "headphones", url: "/category/headphones" },
    { image: speakers, title: "speakers", url: "/category/speakers" },
    { image: earphones, title: "earphones", url: "/category/earphones" },
  ];
  //JSX
  return (
    <div className="  md:grid md:grid-cols-3 md:gap-4 lg:gap-8  ">
      {categories.map((category, index) => {
        return (
          <div className="pt-14 mb-4 w-full relative" key={index}>
            <img
              src={category.image}
              alt={category.title}
              loading="lazy"
              className="w-40 absolute left-[50%] translate-x-[-50%] top-0"
            />
            <div className="bg-custom-cat pt-[88px] pb-[22px] rounded-md text-center">
              <p className="uppercase font-bold text-[15px] mb-4">
                {category.title}
              </p>
              <Link
                to={category.url}
                onClick={scrollTop}
                className="
                w-fit
            mx-auto
              flex items-center gap-4
              uppercase font-bold text-[13px] text-[#00000080]"
              >
                shop
                <img src={arrowRightIcon} alt="arrowRightIcon" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Categories;
