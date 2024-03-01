import { Box, Modal } from "@mui/material"
import CartList from "../molecules/CartList"
import { useModal } from "../../../context/ModalContext"

function ShoppingCart() {
    const { isCartModalOpen, setIsCartModalOpen } = useModal();
    return (
        <Modal
            open={isCartModalOpen}
            onClose={() => setIsCartModalOpen(false)}
            sx={{ zIndex: 5 }}>
            <Box className="shopping-cart-box">
                <div className="flex justify-between flex-col flex-grow-1 gap-8">
                    <div className="flex justify-between">
                        <p className="font-bold uppercase text-lg">Cart ({length})</p>
                        <button className="text-para-secondary 
                    font-medium text-[15px] underline">Remove all</button>
                    </div>
                    <CartList />
                    <div className="flex justify-between">
                        <p className="uppercase text-[15px] text-para-secondary">Total</p>
                        <p className="font-bold uppercase text-lg">$ 0</p>
                    </div>
                </div>
                <button className="primary-btn w-full justify-center mt-4">Checkout</button>
            </Box>
        </Modal>
    )
}

export default ShoppingCart