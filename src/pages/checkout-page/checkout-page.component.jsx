import React from "react";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart-selector";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout-page.styles.scss";

const CheckoutPage = ({ total, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <CheckoutHeader />
      </div>
      <div className="checkout-item-container">
        {cartItems.map(item => (
          <CheckoutItem item={item} />
        ))}
      </div>
      <div className="total">
        <p>Total:${total}</p>
      </div>
      <div className="stripe-button-container">
        <p className="warning">
          For testing, Please use the credit card number ---
          <br /> 4242 4242 4242 42424 --- Exp:01/20 --- CVW:123
        </p>
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
