const Input = ({
  classes = "",
  placeholder = "...",
  name = null,
  type = "text",
  ...props
}) => {
  return (
    <input
      type={type}
      className={`basic-input ${classes}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
