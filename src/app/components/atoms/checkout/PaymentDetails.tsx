import RadioButton from "./RadioButton"
// import TextInput from "../TextInput"

function PaymentDetails() {
    return (
        <div className="w-full flex flex-col gap-6 ">
            <h2 className="checkout-sub-heading">Payment Details</h2>
            <div className="w-full flex flex-col gap-6 md:grid md:grid-cols-2">
                <p className="text-[12px] flex mb-3 font-bold">Payment Method</p>
                <div className="w-full flex flex-col gap-4">
                    <RadioButton name="paymentType" value="COD" label="Cash on Delivery" />
                    <RadioButton name="paymentType" value="Online" label="e-Money" />
                </div>
            </div>
            <div className="w-full flex gap-8">
                <img
                    src="/images/checkout/icon-cash-on-delivery.svg" alt="cashOnDeliveryIcon" />
                <p className="text-para-secondary font-medium text-[0.9375rem]">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence.
                    Just make sure your address is correct
                    so that your order will not be cancelled.</p>
            </div>
            {/* <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-2">
                <TextInput name="eMoneyNumber"
                    label="e-Money Number" placeholder="238521993" />
                <TextInput name="eMoneyPin"
                    label="e-Money PIN" placeholder="6891" />
            </div> */}
        </div>
    )
}

export default PaymentDetails