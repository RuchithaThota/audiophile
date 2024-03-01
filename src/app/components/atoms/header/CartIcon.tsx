import { useModal } from "../../../../context/ModalContext";

function CartIcon(): JSX.Element {
  const { setIsCartModalOpen, isNavOpen, setIsNavOpen } = useModal();
  const toggleCartModal = () => {
    setIsCartModalOpen(prevState => !prevState);
    if (isNavOpen)
      setIsNavOpen(false);
  };
  return (
    <button className="absolute right-6 md:right-0"
      onClick={toggleCartModal}>
      <img src="/images/shared/desktop/icon-cart.svg" alt="cartIcon" />
    </button>
  );
}

export default CartIcon;
