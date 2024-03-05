import { Box, Modal } from "@mui/material"
import CartList from "../molecules/CartList"
import { useModal } from "../../../context/ModalContext"
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { cartItems, clearCart } from "../../../store/cartSlice";
import { useMemo } from "react";
import useCartTotal from "../../hooks/useCartTotal";
import { formatToUSD } from "../../utils/formatterUSD";
import { useToast } from "../../../context/ToastContext";

function ShoppingCart() {
    const { isCartModalOpen, setIsCartModalOpen } = useModal();
    const { showToast } = useToast();
    const navigate = useNavigate();
    const cartList = useAppSelector(cartItems);
    const dispatch = useAppDispatch();
    const { cartTotal } = useCartTotal();
    const [cartTotalUSD] = formatToUSD([cartTotal])
    const handleCheckoutBtnClick = () => {
        if (isEmpty) return;
        navigate('/checkout')
        setIsCartModalOpen(false)
    }
    const handleRemoveAll = () => {
        dispatch(clearCart())
        showToast({ type: 'error', title: 'Removed all products', duration: 1000 })
    }
    const isEmpty = useMemo(() => cartList.length === 0, [cartList]);
    //JSX
    return (
        <Modal
            open={isCartModalOpen}
            onClose={() => setIsCartModalOpen(false)}
            sx={{ zIndex: 5 }}>
            <Box className="shopping-cart-box">
                <div className="flex justify-between flex-col flex-grow-1 gap-8">
                    <div className="flex justify-between">
                        <p className="font-bold uppercase text-lg">
                            Cart ({cartList.length})
                        </p>
                        <button className="text-para-secondary font-medium 
                        text-[15px] underline"
                            onClick={handleRemoveAll}>
                            Remove all
                        </button>
                    </div>
                    {isEmpty ?
                        <p className="secondary-para font-bold h-60 flex-center">
                            Your cart is empty</p> : <CartList />}
                    <div className="flex justify-between">
                        <p className="uppercase text-[15px] text-para-secondary">Total</p>
                        <p className="font-bold uppercase text-lg">{cartTotalUSD}</p>
                    </div>
                </div>
                <button className={`
                ${isEmpty ? "disable-primary-btn" : "primary-btn"} w-full 
                justify-center mt-4`}
                    onClick={handleCheckoutBtnClick}>Checkout</button>
            </Box>
        </Modal >
    )
}

export default ShoppingCart