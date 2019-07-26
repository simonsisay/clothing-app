import React from "react";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown_logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGNOUT
          </div>
        ) : (
          <Link to="/SIGNIN" className="option">
            SIGNIN
          </Link>
        )}
        <CartIcon />
        {!cartHidden && <CartDropdown />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
