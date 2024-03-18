const Button = ({
  children = "Default",
  color = "default",
  variant = "fill",
  disableShadow,
  disabled,
  size,
  startIcon,
  endIcon,
}) => {
  const StartIcon = startIcon;
  const EndIcon = endIcon;
  return (
    <div
      className={`button ${color} ${variant} ${disableShadow && "disableShadow"}
        ${disabled && "disabled"} ${size && size}`}
    >
      {startIcon && <StartIcon />}
      <span className="button__text">{children}</span>
      {endIcon && <EndIcon />}
    </div>
  );
};

export default Button;
