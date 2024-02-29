interface AmountItemProps {
    label: string,
    amount: string
}

function AmountItem({ amount, label }: AmountItemProps) {
    return (
        <p className="uppercase text-[15px] text-para-secondary 
        flex justify-between items-center mb-2">
            {label}
            <span className="font-bold uppercase text-lg text-black">
                {amount}
            </span>
        </p>
    )
}

export default AmountItem