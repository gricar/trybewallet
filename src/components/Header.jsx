import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses
      .reduce((acc, { currency, exchangeRates, value }) => {
        const itemPriceInReal = Number(value * exchangeRates[currency].ask);
        return acc + itemPriceInReal;
      }, 0);
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

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};
