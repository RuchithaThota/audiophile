import GoBackLink from "../components/atoms/GoBackLink"
import CartSummary from "../components/organisms/checkout/CartSummary"
import Checkout from "../components/organisms/checkout/Checkout"
import ConfirmOrder from "../components/organisms/checkout/ConfirmOrder"

function CheckoutPage() {
    return (
        <div className="relative">
            <div className="w-full bg-customGray mt-[5.625rem] pt-4 px-6 pb-[5.625rem]
        md:pt-[48px] md:px-[40px] md:pb-[116px] lg:pt-[79px] lg:pb-[141px]">
                <div className="max-w-[69.375rem] mx-auto flex flex-col ">
                    <GoBackLink />
                    <div className="mt-6 lg:mt-14 lg:flex lg:gap-[1.875rem] lg:items-start">
                        <Checkout />
                        <CartSummary />
                    </div>
                </div>
            </div>
            <ConfirmOrder />
        </div>
    )
}

export default CheckoutPage