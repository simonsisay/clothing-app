import { cartTypes } from "./cart-types";
import { addItemToCart } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
