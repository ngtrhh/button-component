import PropTypes from "prop-types";

const Button = ({
  children,
  color = "default",
  variant = "fill",
  size = "md",
  startIcon,
  endIcon,
  onClick,
  ...props
}) => {
  const StartIcon = startIcon;
  const EndIcon = endIcon;

  return (
    <button
      {...props}
      className={`btn-component ${color} ${variant} ${size}`}
      onClick={() => console.log("click")}
    >
      {startIcon && <StartIcon />}
      <span>{children}</span>
      {endIcon && <EndIcon />}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
