import TextInput from "./TextInput"

function ShippingInfo() {
    return (
        <div className="w-full flex flex-col gap-6">
            <h2 className="checkout-sub-heading">Shipping Info</h2>
            <div className=''>
                <TextInput name="addess" label="Address"
                    placeholder="Williams Colony 1137" />
            </div>
            <div className='w-full flex flex-col gap-6 md:grid md:grid-cols-2'>
                <TextInput label="Pin Code" placeholder="10001" name="pincode" />
                <TextInput name="city" label="City"
                    placeholder="New York" />
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-6'>
                <TextInput name="country" label="Country"
                    placeholder="United States" />
            </div>
        </div>
    )
}

export default ShippingInfo