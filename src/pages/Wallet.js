import React from 'react';
import Header from '../components/Header';
import FormAddExpense from '../components/FormAddExpense';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormAddExpense />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
