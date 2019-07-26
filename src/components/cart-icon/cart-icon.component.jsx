import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart-actions";

const CartIcon = props => (
  <div className="cart-icon" onClick={() => props.toggleCart()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{props.numberOfCartItems}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = ({ cart }) => {
  let quantity = 0;
  cart.cartItems.forEach(item => {
    quantity += item.quantity;
  });
  return {
    numberOfCartItems: quantity
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
