import React from "react";
import HeadphoneOne from "../components/Headphones/HeadphoneOne";
import HeadphoneTwo from "../components/Headphones/HeadphoneTwo";
import HeadphoneThree from "../components/Headphones/HeadphoneThree";

function HeadphonesPage() {
  return (
    <div className="flex flex-col gap-28">
      <HeadphoneOne />
      <HeadphoneTwo />
      <HeadphoneThree />
    </div>
  );
}

export default HeadphonesPage;
