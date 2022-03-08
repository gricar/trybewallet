import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuotations } from '../actions';

const alimentacao = 'Alimentação';

const RESET_STATE = {
  description: '',
  price: 0,
  currency: '',
  payment: 'Dinheiro',
  category: alimentacao,
};

class FormAddExpense extends React.Component {
  state = {
    id: 0,
    description: '',
    price: 0,
    currency: '',
    payment: 'Dinheiro',
    category: alimentacao,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchQuotations());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  AddExpense = () => {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));

    const { dispatch } = this.props;
    dispatch(fetchQuotations(this.state));

    this.resetFormInputs();
  };

  resetFormInputs = () => this.setState(RESET_STATE);

  render() {
    const { description, price, currency, payment, category } = this.state;
    const { currencies } = this.props;
    const currenciesCode = Object.keys(currencies).filter((code) => code !== 'USDT');
    return (
      <form>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="price">
          Valor:
          <input
            type="number"
            name="price"
            data-testid="value-input"
            value={ price }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              currenciesCode.map((code, index) => (
                <option
                  key={ index }
                  value={ code }
                  data-testid={ code }
                >
                  { code }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="payment"
            value={ payment }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria:
          <select
            data-testid="tag-input"
            name="category"
            value={ category }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.AddExpense }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

export default connect(mapStateToProps)(FormAddExpense);

FormAddExpense.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
};
