import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 10;
  const publishableKey = "pk_test_lQaLIZ0xQqzXnK7ztAZ2dfN400bILor2Ej";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Orit Clothing"
      billingAddress
      shippingAddress
      image="https://http://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
