export interface CartTotals {
  cartTotal: number;
  gst: number;
  grandTotal: number;
}
export interface CartItem {
  id: number;
  name: string;
  image: string;
  placeholderImage?: string;
  price: number;
  quantity: number;
}
export default CartItem;
