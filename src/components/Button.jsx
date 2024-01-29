import React from "react";
import { twMerge } from "tailwind-merge";
import { ButtonSize, ButtonType } from "../theme";

const Button = ({ className = "", type = "primary", size = "md", children, ...props }) => {
  // Verificar si los valores de tipo y tamaño son válidos
  const validType = ButtonType[type] ? type : "primary";
  const validSize = ButtonSize[size] ? size : "md";

  // Construir la clase de estilo del botón
  const buttonStyle = twMerge(ButtonType[validType], ButtonSize[validSize], className);

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
