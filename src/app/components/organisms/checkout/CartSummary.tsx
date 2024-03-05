import { SHIPPING_FEE } from "../../../constants/fee";
import useCartTotal from "../../../hooks/useCartTotal";
import { formatToUSD } from "../../../utils/formatterUSD";
import AmountItem from "../../atoms/checkout/AmountItem";
import CartList from "../../molecules/CartList";

function CartSummary() {
    const { cartTotal, gst, grandTotal } = useCartTotal();
    const [cartTotalUSD, ShippingFeeUSD, gstUSD, grandTotalUSD] =
        formatToUSD([cartTotal, SHIPPING_FEE, gst, grandTotal]);
    //JSX
    return (
        <div className="w-full lg:w-[30.875rem] bg-white mt-8 lg:mt-0 px-6 
        py-8 md:p-8 rounded-lg flex flex-col gap-8">
            <h1 className="h1 text-[18px]">Summary</h1>
            <CartList fromCartSummary={true} />
            <div>
                <AmountItem label="Total" amount={cartTotalUSD} />
                <AmountItem label="Shipping" amount={ShippingFeeUSD} />
                <AmountItem label="GST(included)" amount={gstUSD} />
                <div className="mt-4">
                    <AmountItem label="Grand Total" amount={grandTotalUSD} />
                </div>
            </div>
            <button className="primary-btn w-full justify-center">Continue and Pay</button>
        </div>
    )
}

export default CartSummary;
