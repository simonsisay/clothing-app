import React from "react";
import "./form-button.styles.scss";

const FormButton = ({ onClick, children, backgroundColor }) => {
  return (
    <button
      className="form-button"
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
};

export default FormButton;
