interface TextInputProps {
    label: string;
    name: string;
    placeholder: string;

}

const TextInput: React.FC<TextInputProps> = ({ label, name, placeholder }) => {
    return (
        <div>
            <label className="text-[12px] flex mb-3 font-bold">{label}</label>
            <input type="text" placeholder={placeholder} name={name}
                className="w-full h-14 border-[0.0625rem] border-input px-6 
                rounded-lg font-medium  text-[13px]" />
        </div>
    )
}

export default TextInput