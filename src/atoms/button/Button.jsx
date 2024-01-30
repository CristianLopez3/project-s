import React from 'react'
import { twMerge } from 'tailwind-merge';
import { sizeButton, variantButton } from './button.styles';

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {

  const style = twMerge(
    variantButton[variant],
    sizeButton[size],    
    className
  );

  return (
    <button className={style} {...props}>
      {children}
    </button>
  )
  
}

export default Button;