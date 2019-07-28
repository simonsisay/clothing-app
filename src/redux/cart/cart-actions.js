import { cartTypes } from "./cart-types";

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART
});

export const addToCart = item => ({
  type: cartTypes.ADD_TO_CART,
  payload: item
});

export const decreaseQuantity = item => ({
  type: cartTypes.DECREASE_QUANTITY,
  payload: item
});

export const removeFromCart = item => ({
  type: cartTypes.REMOVE_FROM_CART,
  payload: item
});
