function MenuIcon(): JSX.Element {
  return (
    <button className="absolute left-6 md:relative md:mr-10 md:left-0 lg:hidden">
      <img src={"/images/shared/tablet/icon-hamburger.svg"} alt="menuIcon" />
    </button>
  );
}

export default MenuIcon;
