import React, { Component } from 'react';

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
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
