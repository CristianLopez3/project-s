import { cva } from 'class-variance-authority';
import React from 'react'
import cn from '../util/cn';

const Reusable = ({children, className, variant, size, ...props}) => {
  return (
    <button className={cn(reusableVariance({variant, size, className}))} {...props}>
    </button>
  )
}

export default Reusable;


const reusableVariance = cva("rounded-md", {
  variants: {
    variant: {
      primary: "border-2 border-balck px-2 py-1",
      secondary: "border-2 border-white bg-black text-white",
      danger: "border-none border-white bg-red-500 text-white hover:bg-red-600"
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-3 py-0",
      lg: "text-xl px-5 py-0",
    },
    defaultVariants: {
      type: "primary",
      size: "md"
    }
  }
});