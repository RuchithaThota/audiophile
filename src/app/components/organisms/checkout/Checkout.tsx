import BillingDetails from "../../atoms/checkout/BillingDetails"
import PaymentDetails from "../../atoms/checkout/PaymentDetails"
import ShippingInfo from "../../atoms/checkout/ShippingInfo"

function Checkout() {
    return (
        <div className="w-full bg-white p-6 rounded-lg lg:flex-grow-1 lg:p-12">
            <h1 className="h1 text-[28px] md:text-[32px]">Checkout</h1>
            <div className="flex flex-col gap-8 mt-8">
                <BillingDetails />
                <ShippingInfo />
                <PaymentDetails />
            </div>
        </div>
    )
}

export default Checkout
