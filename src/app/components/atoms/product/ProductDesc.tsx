
function ProductDesc({ description }: { description: string }) {
    return (
        <p className="font-medium text-[15px]/7 text-para-secondary">
            {description}
        </p>
    )
}

export default ProductDesc