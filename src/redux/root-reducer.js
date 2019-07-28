import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { directoryReducer } from "./directory/directory-reducer";
import { shopReducer } from "./shop/shop-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

export default persistReducer(persisConfig, rootReducer);
