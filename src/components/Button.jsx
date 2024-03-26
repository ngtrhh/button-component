import PropTypes from "prop-types";

const Button = ({
  children,
  color = "default",
  variant = "fill",
  size = "md",
  startIcon,
  endIcon,
  disableShadow = false,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`btn-component ${color} ${variant}${
        disableShadow ? " disableShadow" : ""
      } ${size}`}
      onClick={onClick}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
