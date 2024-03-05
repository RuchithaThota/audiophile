import { Box, Modal } from "@mui/material"
import { useModal } from "../../../../context/ModalContext"
import { useAppSelector } from "../../../../store/hooks";
import { cartItems } from "../../../../store/cartSlice";
import useCartTotal from "../../../hooks/useCartTotal";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
    const { isConfirmModalOpen, setIsConfirmModalOpen } = useModal();
    const cartList = useAppSelector(cartItems);
    const { grandTotal } = useCartTotal();
    const navigate = useNavigate();
    return (
        <Modal open={isConfirmModalOpen}
            onClose={() => setIsConfirmModalOpen(false)}>
            <Box className="fixed top-0 absolute-left-center w-11/12 mx-auto max-w-[33.75rem] 
            outline-none border-none bg-white rounded-xl z-10 p-6 mt-2 md:p-12">
                <div className="flex flex-col justify-center items-start">
                    <img src="/images/shared/desktop/icon-check-mark.svg" alt="checkmarkIcon" />
                    <h2 className="h2 text-2xl mt-[23px] mb-4 md:text-[32px] md:mt-[33px] md:mb-6 md:leading-10">
                        Thank You For Your Order</h2>
                    <p className="secondary-para">You will receive an email confirmation shortly.</p>
                </div>
                <div className="my-4 md:my-8 flex flex-col md:flex-row">
                    <div className="bg-customGray md:w-1/2 rounded-t-lg md:rounded-s-lg p-6">
                        <div className="h-[3rem] overflow-auto no-scrollbar">
                            {cartList.map((item) => {
                                return <div>
                                    <div className="flex justify-between items-center">
                                        <img src={item.image} alt={item.name} className="w-[54px] h-[54px] mr-2" />
                                        <p className="font-bold uppercase text-[15px]">{item.name}
                                            <br />
                                            <span className="font-bold text-[15px]  text-para-secondary">
                                                $ {item.price}</span></p>
                                        <p className="text-para-secondary font-bold ml-auto">x{item.quantity}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                        <hr className="w-full h-[0.05rem] bg-para-secondary mt-2" />
                        {cartList.length > 1 && <p className="text-para-secondary text-[12px] 
                            mt-4 font-bold text-center">and other {cartList.length - 1} item's</p>}
                    </div>
                    <div className="bg-black md:w-1/2 rounded-b-lg md:rounded-e-lg flex items-center p-6">
                        <p className="text-para-primary">GRAND TOTAL <br />
                            <span className="text-white mt-2 flex">$ {grandTotal}</span></p>
                    </div>
                </div>
                <button className="primary-btn w-full justify-center mt-4 md:mt-8"
                    onClick={() => {
                        navigate('/');
                        setIsConfirmModalOpen(false)
                    }}>
                    Back To Home</button>
            </Box>
        </Modal>
    )
}

export default ConfirmOrder