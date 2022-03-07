import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../actions';

const chooseOption = 'Selecione uma opção';

const RESET_STATE = {
  description: '',
  price: 0,
  currency: 'USD',
  payment: chooseOption,
  category: chooseOption,
};

class FormAddExpense extends React.Component {
  state = {
    id: 0,
    description: '',
    price: 0,
    currency: 'USD',
    payment: chooseOption,
    category: chooseOption,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  AddExpense = () => {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    const itemDetails = this.state;
    const { dispatch } = this.props;
    dispatch(addExpense(null, itemDetails));
    this.resetFormInputs();
  };

  resetFormInputs = () => this.setState(RESET_STATE);

  render() {
    const { description, price, currency, payment, category } = this.state;
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
            <option value="USD">USD</option>
            <option value="BRL">BRL</option>
            <option value="EUR">EUR</option>
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
            <option selected disabled>{ chooseOption }</option>
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
            <option selected disabled>{ chooseOption }</option>
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

export default connect()(FormAddExpense);

FormAddExpense.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
