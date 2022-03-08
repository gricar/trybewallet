import React from 'react';
import Header from '../components/Header';
import FormAddExpense from '../components/FormAddExpense';
import ExpensesHeader from '../components/ExpensesHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormAddExpense />
        <ExpensesHeader />
      </>
    );
  }
}

export default Wallet;
