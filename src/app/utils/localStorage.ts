import { CartSlice } from "../../store/cartSlice";

export const loadCart = (): CartSlice | undefined => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) return undefined;
    return JSON.parse(serializedCart);
  } catch (error) {
    console.error("error occurred while loading cart from localstorage.");
    return undefined;
  }
};

export const saveCart = (cart: CartSlice): void => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("error occurred while saving cart to localstorage.");
  }
};
