import React from "react";

const Button = ({ classes, content, children }) => {
  return (
    <button
      className={` ${classes} btn `}
    >
      {content}
      {children}
    </button>
  );
};

export default Button;
