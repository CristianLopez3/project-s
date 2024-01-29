import React from "react";

const Input = ({
  classes, 
  placeholder = null, 
  name = null,
  id = null,
  value = null,
  type = "text",
  props
 }) => {

  return (
    <input
      type={type}
      className={`basic-input ${classes}`}
      placeholder={(placeholder !== null || placeholder !== '') ? placeholder : "..."}
      {...props}
    />
  );

};

export default Input;
