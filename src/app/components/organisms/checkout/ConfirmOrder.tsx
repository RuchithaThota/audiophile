
function ConfirmOrder() {
    return (
        <div className="fixed left-0 right-0 top-0 h-[100%] bg-overlay p-6 z-20">
            <div className="bg-white rounded-lg w-full 
            max-w-[33.75rem] md:absolute-left-center p-8 md:p-12">
                <img src="/images/shared/desktop/icon-check-mark.svg" alt="checkmarkIcon" />
                <h2 className="h2 text-2xl mt-[23px] mb-4 md:text-[32px] md:mt-[33px] md:mb-6 md:leading-10">
                    Thank You For Your Order</h2>
                <p className="secondary-para">You will receive an email confirmation shortly.</p>
                <div className="my-6 md:flex md:my-10">
                    <div className="bg-customGray rounded-t-lg 
                    md:rounded-tr-none
                    md:rounded-bl-lg p-6 md:flex-1">
                        <div className="flex justify-between items-center">
                            <img src="/images/cart/image-xx99-mark-one-headphones.jpg"
                                className="w-[54px] h-[54px] mr-2"
                                alt="cartImage" />
                            <p className="font-bold uppercase text-[15px]">XX99 I
                                <br />
                                <span className="font-bold text-[15px]  text-para-secondary">$ 799</span>
                            </p>
                            <p className="text-para-secondary font-bold ml-auto">x2</p>
                        </div>
                        <hr className="w-full h-[0.05rem] bg-para-secondary mt-4" />
                        <p className="text-para-secondary text-[12px] mt-4 
                        font-bold text-center">and other 4 items</p>
                    </div>
                    <div className="bg-black rounded-b-lg 
                    p-6 md:w-[12.375rem] md:py-[42px] md:px-6
                    md:rounded-bl-none md:rounded-tr-lg">
                        <p className="text-para-primary">GRAND TOTAL <br />
                            <span className="text-white mt-2 flex">$ 1,485</span></p>
                    </div>
                </div>
                <button className="primary-btn w-full justify-center">Back To Home</button>
            </div>
        </div>
    )
}

export default ConfirmOrder;
