
interface RadioButtonProps {
    name: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void
}

function RadioButton({ name, label, value, checked, onChange }: RadioButtonProps) {
    return (
        <div className="w-full flex flex-col gap-4">
            <label className="w-full h-14 border-[0.0625rem] border-input px-6 
                rounded-lg font-bold  text-[14px] flex items-center gap-4">
                <input type="radio" name={name} value={value}
                    checked={checked} onChange={(e) => onChange(e.target.value)} />
                {label}
            </label>
        </div>
    )
}

export default RadioButton