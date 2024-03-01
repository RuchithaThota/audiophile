import { NavLink } from "react-router-dom";
import { scrollTop } from "../../utils/scrollTop";
import { getNavLinks } from "../../utils/navLinks";

interface NavLinksProps {
  fromFooter?: boolean
}

function NavLinks({ fromFooter }: NavLinksProps): JSX.Element {
  const navLinks = getNavLinks();
  return (
    <>
      {navLinks.map(([title, url], index) => {
        return (
          <li key={index}>
            <NavLink
              to={url}
              onClick={scrollTop}
              className={({ isActive }) => !fromFooter ?
                isActive ? 'active-nav-link' : 'nav-link' :
                'nav-link'}
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
