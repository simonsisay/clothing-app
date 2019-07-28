import React from "react";
import "./checkout-header.styles.scss";

const CheckoutHeader = () => {
  return (
    <div className="container">
      <span className="header-block product">Prouct</span>
      <span className="header-block name">Name</span>
      <span className="header-block quantity">Quantity</span>
      <span className="header-block price">Price</span>
      <span className="header-block remove">Remove</span>
    </div>
  );
};

export default CheckoutHeader;
