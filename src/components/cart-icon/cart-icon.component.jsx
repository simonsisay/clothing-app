import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart-actions";

const CartIcon = props => (
  <div className="cart-icon" onClick={() => props.toggleCart()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
