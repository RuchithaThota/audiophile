import CartList from "../molecules/CartList"

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


