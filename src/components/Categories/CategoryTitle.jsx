import React from "react";

function CategoryTitle({ title }) {
  return (
    <div className="w-full bg-custom-gray pt-[96px] ">
      <div className="h-24  flex justify-center items-center md:h-60">
        <h1
          className="text-custom-white uppercase font-bold 
        text-[28px]
        md:text-[40px]"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default CategoryTitle;
