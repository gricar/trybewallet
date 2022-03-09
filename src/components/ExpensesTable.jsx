import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './expensesTable.css';
import { removeExpense } from '../actions';

class ExpensesTable extends React.Component {
  deleteExpenseItem = (expenseItemId) => {
    const { dispatch } = this.props;
    dispatch(removeExpense(expenseItemId));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table className="expensesTable">
        <caption>Expenses Table</caption>
        <thead>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => {
              const {
                currency, description, value, method, tag, id, exchangeRates,
              } = expense;
              const cambio = parseFloat(exchangeRates[currency].ask);
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{parseFloat(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name.split('/')[0]}</td>
                  <td>{cambio.toFixed(2)}</td>
                  <td>{parseFloat(value * cambio).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.deleteExpenseItem(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  dispatch: PropTypes.func.isRequired,
};
