import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './expensesTable.css';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
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
              const cambio = parseFloat(exchangeRates[currency].ask).toFixed(2);
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{parseFloat(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{cambio}</td>
                  <td>{value * cambio}</td>
                  <td>Real</td>
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
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};
