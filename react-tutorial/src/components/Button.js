import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, className, clickEvent }) {
  const buttonClassName = className + (className === 'box-color' ? ' box-color' : '');

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => clickEvent(text)}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

export default Button;