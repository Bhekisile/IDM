import PropTypes from "prop-types";

function Checkbox({ id, type, name, size, handleClick, isChecked }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      size={size}
      checked={isChecked}
      onChange={(e) => handleClick(e, id)}
    />
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Checkbox;