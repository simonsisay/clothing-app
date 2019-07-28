import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity
} from "../../redux/cart/cart-actions";

const CheckoutItem = ({
  item,
  removeFromCart,
  addToCart,
  decreaseQuantity
}) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="item-container">
      <div className="image-container item">
        <img src={imageUrl} alt={name} className="image " />
      </div>
      <p className="name item">{name}</p>
      <div className="quantity item">
        <span
          className="arrow"
          onClick={() => {
            if (quantity > 1) {
              decreaseQuantity(item);
            } else {
              removeFromCart(item);
            }
          }}
        >
          {"<"}
        </span>
        {quantity}
        <span className="arrow" onClick={() => addToCart(item)}>
          {">"}
        </span>
      </div>
      <p className="price item">{price}</p>
      <p className="remove item" onClick={() => removeFromCart(item)}>
        X
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  removeFromCart: item => dispatch(removeFromCart(item)),
  decreaseQuantity: item => dispatch(decreaseQuantity(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
