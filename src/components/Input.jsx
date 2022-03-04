import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      description,
      name,
      value,
      onInputChange,
      type = 'text',
      testid,
    } = this.props;
    return (
      <label htmlFor={ name } className={ `${name} formInput` }>
        { description }
        <input
          type={ type }
          id={ name }
          name={ name }
          data-testid={ testid }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default Input;

const { string, number, func } = PropTypes;

Input.defaultProps = {
  value: 0,
  type: 'text',
};

Input.propTypes = {
  description: string.isRequired,
  name: string.isRequired,
  value: PropTypes.oneOfType([
    string,
    number,
  ]),
  onInputChange: func.isRequired,
  type: string,
  testid: string.isRequired,
};
