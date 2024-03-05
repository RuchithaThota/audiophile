import { useForm } from "../../../../context/FormContext"
import TextInput from "./TextInput"

function BillingDetails() {
    const { formData } = useForm();
    return (
        <div className="w-full flex flex-col gap-6">
            <h2 className="checkout-sub-heading">Billing Details</h2>
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                <TextInput name="name" label="Name" value={formData.name}
                    placeholder="John Doe" />
                <TextInput name="email" label="Email Address"
                    value={formData.email}
                    placeholder="johndoe8686@gamil.com" />
            </div>
            <div className=' md:grid md:grid-cols-2 md:gap-6'>
                <TextInput name="phoneNumber" label="Phone Number"
                    value={formData.phoneNumber}
                    placeholder="1234567890" />
            </div>
        </div>
    )
}

export default BillingDetails