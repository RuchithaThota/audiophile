import { useForm } from "../../../../context/FormContext";
import ErrorField from "./ErrorField";

interface TextInputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string
}

const TextInput: React.FC<TextInputProps> = ({ label, name, placeholder, value }) => {
    const { setFormData, formErrors } = useForm();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === 'eNumber' || name === 'ePin' || name === 'pincode' ||
            name === "phoneNumber") {
            value = value.replace(/\D/g, '');
        } else {
            value = value.replace(/ +/g, ' ');
        }
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
    }
    return (
        <div>
            <div className="flex justify-between items-center">
                <label className="text-[12px] flex mb-3 font-bold">{label}</label>
                <ErrorField errorMsg={formErrors[name]} />
            </div>
            <input type="text" placeholder={placeholder} name={name}
                value={value}
                onChange={handleChange}
                className={`w-full h-14 border-[0.0625rem] border-input px-6 
                rounded-lg font-medium  text-[13px] outline-none focus:border-primary placeholder:text-qtyBtn ${formErrors[name] ? "border-red-500" : null}`} />
        </div>
    )
}

export default TextInput