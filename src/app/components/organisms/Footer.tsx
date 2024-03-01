import { Link } from "react-router-dom";
import { scrollTop } from "../../utils/scrollTop";
import NavLinks from "../molecules/NavLinks";
import SocialLinks from "../molecules/SocialLinks";

function Footer(): JSX.Element {
  //JSX
  return (
    <div className="bg-charcoal w-full px-6 pb-10 md:px-10">
      <div className="w-full max-w-[1109px] mx-auto my-0 relative">
        <hr className="bg-primary w-[100px] h-[4px] mb-12 mx-auto border-none 
          md:ml-0 md:mr-auto"/>
        <div className="flex flex-col justify-center items-center gap-12
        md:items-start lg:flex-row lg:justify-between">
          <Link to="/" onClick={scrollTop} >
            <img
              src={"images/shared/desktop/logo.svg"}
              alt="logo"
            />
          </Link>
          <ul className="flex items-center flex-col gap-4 md:gap-8 md:flex-row">
            <NavLinks fromFooter={true} />
          </ul>
        </div>
        <p className="primary-para leading-7 my-12 md:text-left md:mb-20 md:mt-9 
        lg:w-[520px] lg:mb-12">
          Audiophile is an all in one stop to fulfill your audio needs. We're
          a small team of music lovers and sound specialists who are devoted
          to helping you get the most out of personal audio. Come and visit
          our demo facility - we’re open 7 days a week.
        </p>
        <p className="primary-para">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 
        md:absolute md:bottom-0 md:right-0 md:mt-0 md:w-fit 
        lg:bottom-auto lg:top-[50%] lg:translate-y-[50%]">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Footer;
