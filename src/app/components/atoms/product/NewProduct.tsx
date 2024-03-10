
function NewProduct({ textPrimary }: { textPrimary?: boolean }) {
    return (
        <p
            className={`uppercase text-[14px] tracking-[.625rem] font-normal 
            leading-[1.195rem] ${textPrimary ? "text-primary" : 'para-primary'}`}>
            New Product
        </p>
    )
}

export default NewProduct