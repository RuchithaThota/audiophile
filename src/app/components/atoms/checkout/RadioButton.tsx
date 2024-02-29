
interface RadioButtonProps {
    name: string;
    label: string;
    value: string
}

function RadioButton({ name, label, value }: RadioButtonProps) {
    return (
        <div className="w-full flex flex-col gap-4">
            <label className="w-full h-14 border-[0.0625rem] border-input px-6 
                rounded-lg font-bold  text-[14px] flex items-center gap-4">
                <input type="radio" name={name} value={value}
                    checked={true} />
                {label}
            </label>
        </div>
    )
}

export default RadioButton