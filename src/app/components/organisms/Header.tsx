import CartIcon from "../atoms/header/CartIcon";
import Logo from "../atoms/header/Logo";
import MenuIcon from "../atoms/header/MenuIcon";
import NavLinks from "../molecules/NavLinks";

function Header(): JSX.Element {
  return (
    <div className="bg-charcoal w-full fixed top-0 z-10 md:px-10 md:py-0">
      <div
        className="h-[5.625rem] w-full max-w-[1109px] mx-auto my-0 
        flex items-center justify-center relative 
        border-b border-header-line md:justify-start lg:justify-center">
        <MenuIcon />
        <Logo />
        <ul className="hidden lg:flex lg:justify-between lg:items-center lg:gap-8">
          <NavLinks />
        </ul>
        <CartIcon />
      </div>
    </div>
  );
}

export default Header;
