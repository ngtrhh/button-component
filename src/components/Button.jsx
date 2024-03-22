import PropTypes from "prop-types";

const Button = (props) => {
  const StartIcon = props.startIcon;
  const EndIcon = props.endIcon;

  const text = props.text ? props.text : "Default";
  const color = props.color ? props.color : "primary";
  const variant = props.variant ? props.variant : "fill";
  const disabled = props.disabled ? "disabled" : "";
  const disableShadow = props.disableShadow ? "disableShadow" : "";
  const size = props.size ? props.size : "md";

  return (
    <div
      className={`button ${color} ${variant} ${disableShadow} ${disabled} ${
        size && size
      }`}
      onClick={props.onClick}
    >
      {props.startIcon && <StartIcon />}
      <span className="text">{text}</span>
      {props.endIcon && <EndIcon />}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
