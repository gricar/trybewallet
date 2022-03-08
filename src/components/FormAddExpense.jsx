import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuotations } from '../actions';

const alimentacao = 'Alimentação';

const RESET_STATE = {
  description: '',
  value: 0,
  currency: 'USD',
  method: 'Dinheiro',
  tag: alimentacao,
};

class FormAddExpense extends React.Component {
  state = {
    id: 0,
    description: '',
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: alimentacao,
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
    const { description, value, currency, method, tag } = this.state;
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
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
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
        <label htmlFor="method">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            value={ tag }
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
