import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './header.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const totalExpenses = 0;
    const currency = 'BRL';
    return (
      <header>
        <ul>
          <li data-testid="email-field">
            {`E-mail: ${email}`}
          </li>
          <li data-testid="total-field">
            {`Despesa Total: R$${totalExpenses}`}
          </li>
          <li data-testid="header-currency-field">
            { currency }
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
