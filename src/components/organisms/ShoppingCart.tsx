
function ShoppingCart() {
  const length: number = 0
  return (
    <div className='modal-wrapper p-6 md:py-6 md:px-10 flex justify-center'>
      <div className="w-full max-w-[69.375rem]">
        <div className='rounded-lg bg-white border h-[30.5rem] max-w-[23.5625rem] 
        ml-auto py-8 px-7
        flex flex-col gap-6'>
          <div className="flex justify-between flex-col flex-grow-1 gap-8">
            <div className="flex justify-between">
              <p className="font-bold uppercase text-lg">Cart ({length})</p>
              <button className="text-para-secondary font-medium text-[15px] underline">Remove all</button>
            </div>
            <CartList />
            <div className="flex justify-between">
              <p className="uppercase text-[15px] text-para-secondary">Total</p>
              <p className="font-bold uppercase text-lg">$ 0</p>
            </div>
          </div>
          <button className="primary-btn w-full justify-center">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart

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
        <div className="bg-lightGray w-24 h-8 px-4 ml-auto
            flex justify-between items-center font-bold">
          <button className="text-qtyBtn">-</button>
          <p>{1}</p>
          <button className="text-qtyBtn">+</button>
        </div>
      </div>
    })}
  </div>
}
