import { useForm } from "../../../../context/FormContext";
import { useModal } from "../../../../context/ModalContext";
import { SHIPPING_FEE } from "../../../constants/fee";
import { EMAIL_REGEX } from "../../../constants/regex";
import useCartTotal from "../../../hooks/useCartTotal";
import { formatToUSD } from "../../../utils/formatterUSD";
import AmountItem from "../../atoms/checkout/AmountItem";
import CartList from "../../molecules/CartList";

function CartSummary() {
    const { setFormErrors, formData, resetFormData } = useForm();
    const { setIsConfirmModalOpen } = useModal();
    const { cartTotal, gst, grandTotal } = useCartTotal();
    const [cartTotalUSD, ShippingFeeUSD, gstUSD, grandTotalUSD] =
        formatToUSD([cartTotal, SHIPPING_FEE, gst, grandTotal]);
    //handleContinueAndPay
    const handleContinueAndPay = () => {
        const errors: { [key: string]: string } = {};
        if (formData.name === '') {
            errors.name = "Name is required";
        }
        if (formData.email === '') {
            errors.email = "Email is required";
        } else if (!EMAIL_REGEX.test(formData.email)) {
            errors.email = "Invalid email address";
        }
        if (formData.phoneNumber === '') {
            errors.phoneNumber = "Phone number is required";
        } else if (formData.phoneNumber.length !== 10) {
            errors.phoneNumber = "Invalid phone number"
        }
        if (formData.address === '') {
            errors.address = "Address is required";
        }
        if (formData.pincode === '') {
            errors.pincode = "Pincode is required";
        } else if (formData.pincode.length !== 6) {
            errors.pincode = "Pincode must be 6 digits"
        }
        if (formData.city === '') {
            errors.city = "City is required";
        }
        if (formData.country === '') {
            errors.country = "Country is required";
        }
        if (formData.paymentType === '') {
            errors.paymentType = "Payment type is required";
        }
        if (formData.paymentType === 'Online' && formData.eNumber === '') {
            errors.eNumber = "e-Money number is required";
        } else if (formData.eNumber.length !== 9) {
            errors.eNumber = 'Wrong Format'
        }
        if (formData.paymentType === 'Online' && formData.ePin === '') {
            errors.ePin = "e-Money PIN is required";
        } else if (formData.ePin.length !== 4) {
            errors.ePin = "Wrong Format";
        }
        setFormErrors(errors);
        const hasErrors = Object.keys(errors).length > 0;
        if (!hasErrors) {
            setIsConfirmModalOpen(true);
            resetFormData();
        }
    }
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
            <button className="primary-btn w-full justify-center"
                onClick={handleContinueAndPay}
            >Continue and Pay</button>
        </div>
    )
}

export default CartSummary;
