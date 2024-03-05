import { cartItems, decreaseItemQuantity, increaseItemQuantity } from "../../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { formatToUSD } from "../../utils/formatterUSD";

interface CartListProps {
    fromCartSummary?: boolean;
}

const CartList = ({ fromCartSummary = false }: CartListProps) => {
    const cartList = useAppSelector(cartItems);
    const dispatch = useAppDispatch();

    const itemPriceUSD = (price: number) => formatToUSD([price])[0];

    const handleDecreaseQty = (itemId: number) => {
        dispatch(decreaseItemQuantity(itemId));
    };

    const handleIncreaseQty = (itemId: number) => {
        dispatch(increaseItemQuantity(itemId));
    };

    return (
        <div className="w-full h-60 overflow-auto no-scrollbar flex flex-col gap-5">
            {cartList.map((listItem) => (
                <div key={listItem.id} className="h-16 flex items-center">
                    <img
                        src={listItem.image}
                        className="w-[64px] h-[64px] mr-4"
                        alt={listItem.name}
                    />
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[16px]">{listItem.name}</p>
                        <p className="font-bold text-[16px]  text-para-secondary">
                            {itemPriceUSD(listItem.price)}
                        </p>
                    </div>
                    {fromCartSummary ? (
                        <p className="text-para-secondary font-bold ml-auto">
                            x{listItem.quantity}</p>
                    ) : (
                        <div className="bg-customGray w-24 h-8 px-4 ml-auto 
                        flex justify-between items-center font-bold">
                            <button className="qtyBtn"
                                onClick={() => handleDecreaseQty(listItem.id)}>
                                -
                            </button>
                            <p>{listItem.quantity}</p>
                            <button className="qtyBtn"
                                onClick={() => handleIncreaseQty(listItem.id)}>
                                +
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CartList;
