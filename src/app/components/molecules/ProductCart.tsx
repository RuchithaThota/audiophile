
function ProductCart() {
    const quantity: number = 1;
    return (
        <div className="flex flex-col flex-wrap gap-4 md:flex-row ">
            <div className="bg-customGray w-28 h-12 px-4 
            flex justify-between items-center font-bold">
                <button className="text-qtyBtn">-</button>
                <p>{quantity}</p>
                <button className="text-qtyBtn">+</button>
            </div>
            <button className="primary-btn">ADD TO CART</button>
        </div>
    )
}

export default ProductCart