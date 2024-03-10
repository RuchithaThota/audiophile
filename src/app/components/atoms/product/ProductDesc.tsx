
function ProductDesc({ description }: { description: string }) {
    return (
        <p className="font-medium text-[15px] leading-[1.5625rem] text-para-secondary">
            {description}
        </p>
    )
}

export default ProductDesc