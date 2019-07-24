import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
