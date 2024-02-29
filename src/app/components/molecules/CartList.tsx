
const CartList = () => {
    const cartList: number[] = [1, 2, 3, 4, 5];
    return <div className="w-full h-60 overflow-auto no-scrollbar flex flex-col gap-5">
        {cartList.map(() => {
            return <div className="h-16 flex items-center">
                <img src="/images/cart/image-xx99-mark-one-headphones.jpg"
                    className="w-[64px] h-[64px] mr-4"
                    alt="cartImage" />
                <div className="flex flex-col">
                    <p className="font-bold uppercase text-[16px]">XX99 I</p>
                    <p className="font-bold text-[16px]  text-para-secondary">$ 799</p>
                </div>
                <p className="text-para-secondary font-bold ml-auto">x2</p>
                {/* <div className="bg-customGray w-24 h-8 px-4 ml-auto
            flex justify-between items-center font-bold">
                    <button className="text-qtyBtn">-</button>
                    <p>{1}</p>
                    <button className="text-qtyBtn">+</button>
                </div> */}
            </div>
        })}
    </div>
}

export default CartList