import AmountItem from "../../atoms/checkout/AmountItem";
import CartList from "../../molecules/CartList";

function CartSummary() {
    return (
        <div className="w-full lg:w-[24.875rem] bg-white mt-8 lg:mt-0 px-6 py-8 md:p-8 rounded-lg
        flex flex-col gap-8">
            <h1 className="h1 text-[18px]">Summary</h1>
            <CartList />
            <div>
                <AmountItem label="Total" amount={"$2000"} />
                <AmountItem label="Shipping" amount={"$50"} />
                <AmountItem label="GST(included)" amount={"$500"} />
                <div className="mt-4">
                    <AmountItem label="Grand Total" amount={"$2550"} />
                </div>
            </div>
            <button className="primary-btn w-full justify-center">Continue and Pay</button>
        </div>
    )
}

export default CartSummary;
