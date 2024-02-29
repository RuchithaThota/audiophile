import { NavLink } from "react-router-dom";
import { scrollTop } from "../../utils/scrollTop";
import { getNavLinks } from "../../utils/navLinks";

function NavLinks() {
  const navLinks = getNavLinks();
  return (
    <>
      {navLinks.map(([title, url], index) => {
        return (
          <li key={index}>
            <NavLink
              to={url}
              onClick={scrollTop}
              className="text-secondary font-bold text-[13px]/6 tracking-wider 
              uppercase transition-colors ease-in-out duration-300 hover:text-primary"
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
