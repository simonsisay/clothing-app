import { cartTypes } from "./cart-types";

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART
});

export const addToCart = item => ({
  type: cartTypes.ADD_TO_CART,
  payload: item
});
