import React from 'react';

class ExpensesHeader extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            Descrição
          </li>
          <li>
            Tag
          </li>
          <li>
            Método de pagamento
          </li>
          <li>
            Valor
          </li>
          <li>
            Moeda
          </li>
          <li>
            Câmbio utilizado
          </li>
          <li>
            Valor convertido
          </li>
          <li>
            Moeda de conversão
          </li>
          <li>
            Editar/Excluir
          </li>
        </ul>
      </header>
    );
  }
}

export default ExpensesHeader;
