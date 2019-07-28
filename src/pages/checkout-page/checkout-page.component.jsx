import React from "react";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart-selector";

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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
