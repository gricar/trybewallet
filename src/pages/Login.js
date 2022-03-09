import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';
import './login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  btnLogin = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(login({ email }));
    history.push('/carteira');
  }

  render() {
    const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // https://ui.dev/validate-email-address-javascript
    const MIN_LENGTH = 5;
    const { email, password } = this.state;
    return (
      <form className="loginForm">
        <h4>Área de Login</h4>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          data-testid="email-input"
          className="loginFromInputs"
          value={ email }
          onChange={ this.onInputChange }
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          data-testid="password-input"
          className="loginFromInputs"
          value={ password }
          onChange={ this.onInputChange }
        />
        <button
          type="button"
          className="loginBtn"
          disabled={ !email.match(VALID_EMAIL_REGEX) || password.length <= MIN_LENGTH }
          onClick={ this.btnLogin }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default connect()(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
