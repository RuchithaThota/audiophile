import { useModal } from "../../../../context/ModalContext";

function MenuIcon(): JSX.Element {
  const { isCartModalOpen, setIsCartModalOpen, setIsNavOpen } = useModal();
  function handleMenuClick() {
    setIsNavOpen(prevState => !prevState)
    if (isCartModalOpen)
      setIsCartModalOpen(false);
  }
  return (
    <button className="absolute left-6 md:relative md:mr-10 md:left-0 lg:hidden"
      onClick={handleMenuClick}>
      <img src={"/images/shared/tablet/icon-hamburger.svg"} alt="menuIcon" className="menuIcon" />
    </button>
  );
}

export default MenuIcon;
