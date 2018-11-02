import React from "react";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
);

export default renderField;
