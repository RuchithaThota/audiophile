
function NewProduct({ textPrimary }: { textPrimary?: boolean }) {
    return (
        <p
            className={`new ${textPrimary ? "text-primary" : ''}`}>
            New Product
        </p>
    )
}

export default NewProduct