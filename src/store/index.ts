import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import AuthReducer from "./authSlice";
import { saveCart } from "../app/utils/localStorage";

export const store = configureStore({
  reducer: { cart: CartReducer, auth: AuthReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveCart(store.getState().cart);
});
