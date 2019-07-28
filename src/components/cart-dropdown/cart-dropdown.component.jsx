import React from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem item={item} />
        ))}
      </div>
      <CustomButton onClick={() => history.push("checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
