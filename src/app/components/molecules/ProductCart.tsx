import { useState } from "react"
import { useAppDispatch } from "../../../store/hooks";
import { addItemToCart } from "../../../store/cartSlice";
import { Product } from "../../models/Product";
import CartItem from "../../models/Cart";
import { useToast } from "../../../context/ToastContext";

interface ProductCartProps {
    product: Product
}

function ProductCart({ product }: ProductCartProps) {
    const dispatch = useAppDispatch();
    const { showToast } = useToast();
    const [qty, setQty] = useState(1);
    const item: CartItem = {
        id: product.id,
        image: product.cartImage,
        name: product.shortName,
        price: product.price,
        quantity: qty
    }
    const increaseQty = () => {
        setQty(prev => prev + 1)
    }
    const decreaseQty = () => {
        setQty(prev => Math.max(prev - 1, 1))
    }
    const handleAddToCartClick = () => {
        dispatch(addItemToCart(item))
        setQty(1);
        showToast({ type: 'success', title: `${product.shortName} added to the cart!`, duration: 1000 })
    }
    //JSX
    return (
        <div className="flex flex-col flex-wrap gap-4 md:flex-row ">
            <div className="bg-customGray w-28 h-12 px-4 
            flex justify-between items-center font-bold">
                <button className="qtyBtn"
                    onClick={decreaseQty}>-</button>
                <p>{qty}</p>
                <button className="qtyBtn"
                    onClick={increaseQty}
                >+</button>
            </div>
            <button className="primary-btn"
                onClick={handleAddToCartClick}>ADD TO CART</button>
        </div>
    )
}

export default ProductCart