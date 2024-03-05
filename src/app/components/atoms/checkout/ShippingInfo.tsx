import { useForm } from "../../../../context/FormContext"
import TextInput from "./TextInput"

function ShippingInfo() {
    const { formData } = useForm();
    return (
        <div className="w-full flex flex-col gap-6">
            <h2 className="checkout-sub-heading">Shipping Info</h2>
            <div className=''>
                <TextInput name="addess" label="Address"
                    placeholder="Williams Colony 1137" value={formData.address} />
            </div>
            <div className='w-full flex flex-col gap-6 md:grid md:grid-cols-2'>
                <TextInput label="Pin Code" placeholder="10001" name="pincode" value={formData.pincode} />
                <TextInput name="city" label="City"
                    placeholder="New York" value={formData.city} />
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-6'>
                <TextInput name="country" label="Country"
                    placeholder="United States" value={formData.country} />
            </div>
        </div>
    )
}

export default ShippingInfo