
import { twMerge } from "tailwind-merge";
import { InputVariant } from "../theme";

const Input = ({
  className = "",
  placeholder = "...",
  name = null,
  type = "text",
  variant = "basic",
  ...props
}) => {
  return (
    <input
      type={type}
      className={twMerge(InputVariant[variant], className)}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
