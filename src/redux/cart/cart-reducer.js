import { cartTypes } from "./cart-types";

const INITIAL_STATE = {
  hidden: true
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
