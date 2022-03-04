import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.enableBtn();
  }

  enableBtn = () => {
    const { email, password } = this.state;
    // const VALID_EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // https://www.codegrepper.com/code-examples/javascript/javascript+regex+email+validation
    const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // https://ui.dev/validate-email-address-javascript
    const MIN_LENGTH = 5;
    if (email.match(VALID_EMAIL_REGEX) && password.length >= MIN_LENGTH) {
      this.setState({ isDisabled: false });
    }
  }

  btnLogin = () => {
    const { history } = this.props;

    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <form>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          value={ email }
          onChange={ this.onInputChange }
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          data-testid="password-input"
          value={ password }
          onChange={ this.onInputChange }
        />
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.btnLogin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
