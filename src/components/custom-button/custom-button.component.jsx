/*  */ import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ onClick, children, backgroundColor }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#000" }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
