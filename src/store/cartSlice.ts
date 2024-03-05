import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartItem from "../app/models/Cart";
import { RootState } from ".";
import { loadCart } from "../app/utils/localStorage";

export type CartSlice = {
  items: CartItem[];
};
const persistedCart = loadCart();
const initialCartState: CartSlice = { items: [] };
export const cartSlice = createSlice({
  name: "cart",
  initialState: persistedCart ? persistedCart : initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    },
    clearCart: () => {
      return initialCartState;
    },
  },
});
export const totalAmount = (state: RootState): number => {
  const total = state.cart.items.reduce((cartTotal, item) => {
    const { price, quantity } = item;
    cartTotal += price * quantity;
    return cartTotal;
  }, 0);
  return parseFloat(total.toFixed(2));
};
export const cartItems = (state: RootState): CartItem[] => state.cart.items;
export const {
  addItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
