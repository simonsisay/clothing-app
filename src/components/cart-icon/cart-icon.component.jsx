import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";

const CartIcon = props => (
  <div className="cart-icon" onClick={() => props.toggleCart()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{props.numberOfCartItems}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = state => {
  return {
    numberOfCartItems: selectCartItemsCount(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
