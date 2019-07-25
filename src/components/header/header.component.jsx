import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown_logo.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ signedIn }) => {
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
        {signedIn ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGNOUT
          </div>
        ) : (
          <Link to="/SIGNIN" className="option">
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
