import { useModal } from "../../../../context/ModalContext";
import { cartItems } from "../../../../store/cartSlice";
import { useAppSelector } from "../../../../store/hooks";

function CartIcon(): JSX.Element {
  const { setIsCartModalOpen, isNavOpen, setIsNavOpen, setShowProfile, showProfile } = useModal();
  const cartList = useAppSelector(cartItems);
  const toggleCartModal = () => {
    setIsCartModalOpen(prevState => !prevState);
    if (isNavOpen)
      setIsNavOpen(false);
    if (showProfile)
      setShowProfile(false)
  };
  return (
    <button className="absolute right-6  md:right-0"
      onClick={toggleCartModal}>
      <img src="/images/shared/desktop/icon-cart.svg" alt="cartIcon" />
      <div className="absolute top-[-10px] right-[-12px] bg-primary w-[20px] h-[20px] rounded-xl text-white font-bold text-sm text-center">{cartList.length}</div>
    </button>
  );
}

export default CartIcon;
