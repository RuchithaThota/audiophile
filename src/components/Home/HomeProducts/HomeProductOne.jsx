import { Link } from "react-router-dom";
import desktopProductOneImg from "../../../assets/images/home/desktop/image-speaker-zx9.png";
import tabletProductOneImg from "../../../assets/images/home/tablet/image-speaker-zx9.png";
import mobileProductOneImg from "../../../assets/images/home/mobile/image-speaker-zx9.png";

const HomeProductOne = () => {
  return (
    <div className="home-product-one">
      <div className="w-fit mx-auto my-0 lg:flex lg:h-full lg:overflow-hidden">
        <img
          src={mobileProductOneImg}
          alt="speaker-zx9"
          loading="lazy"
          className="w-[10.7rem] mb-8 block md:hidden"
        />
        <img
          src={tabletProductOneImg}
          alt="speaker-zx9"
          loading="lazy"
          className="hidden md:block md:w-[12.325rem] md:mb-8 lg:hidden"
        />
        <img
          src={desktopProductOneImg}
          alt="speaker-zx9"
          loading="lazy"
          className="hidden lg:block lg:w-full lg:my-auto lg:mx-0
          xl:bottom-[-1rem] xl:mt-auto xl:mb-0 xl:mx-0 xl:relative"
        />
      </div>
      <div className="mx-auto flex flex-col items-center gap-6 md:w-[21rem] lg:items-start">
        <h2
          className="uppercase font-bold font-manrope text-center text-white 
          text-4xl/[50px] md:text-[3.5rem]/[80px] lg:text-left"
        >
          ZX9 SPEAKER
        </h2>
        <p
          className="text-center text-custom-white-2 font-medium text-[15px]/6
          lg:text-left
          "
        >
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          to=""
          className="text-white uppercase font-bold text-[13px]
            bg-black h-12 px-10 flex items-center transition-bg ease-in-out duration-300 lg:hover:bg-custom-white-2"
        >
          See Product
        </Link>
      </div>
    </div>
  );
};
export default HomeProductOne;
