import { totalAmount } from "../../store/cartSlice";
import { useAppSelector } from "../../store/hooks";
import { SHIPPING_FEE, TAX_RATE } from "../constants/fee";
import { CartTotals } from "../models/Cart";

const useCartTotal = (): CartTotals => {
  const cartTotal = useAppSelector(totalAmount);
  const gst = parseFloat((TAX_RATE * cartTotal).toFixed(2));
  const grandTotal = cartTotal + gst + SHIPPING_FEE;
  return { cartTotal, gst, grandTotal };
};
export default useCartTotal;
