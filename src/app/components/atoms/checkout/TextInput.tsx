import { useForm } from "../../../../context/FormContext";

interface TextInputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string
}

const TextInput: React.FC<TextInputProps> = ({ label, name, placeholder, value }) => {
    const { setFormData } = useForm();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => ({ ...prevFormData, [e.target.name]: e.target.value }))
    }
    return (
        <div>
            <label className="text-[12px] flex mb-3 font-bold">{label}</label>
            <input type="text" placeholder={placeholder} name={name}
                value={value}
                onChange={handleChange}
                className="w-full h-14 border-[0.0625rem] border-input px-6 
                rounded-lg font-medium  text-[13px] outline-none focus:border-primary placeholder:text-qtyBtn" />
        </div>
    )
}

export default TextInput