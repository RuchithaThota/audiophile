
function ProductName({ name }: { name: string }) {
    return (
        <h2 className="font-bold text-[28px] md:text-[40px] 
                        text-black uppercase md:w-[360px]">
            {name}
        </h2>
    )
}

export default ProductName