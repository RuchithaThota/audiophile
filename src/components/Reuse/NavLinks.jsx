import React from "react";
import { Link } from "react-router-dom";
import { getNavLinks } from "../../utils/getNavLinks";
import { scrollTop } from "../../utils/scrollTop";

function NavLinks() {
  //navLinks
  const navLinks = getNavLinks();
  //JSX
  return (
    <>
      {navLinks.map(([title, url], index) => {
        return (
          <li key={index}>
            <Link
              to={url}
              onClick={scrollTop}
              className="text-[13px]/6 font-bold uppercase 
              transition-colors ease-in-out duration-300
               text-custom-white  hover:text-orange-400"
            >
              {title}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
