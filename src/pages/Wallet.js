import React from 'react';
import Header from '../components/Header';
import FormAddExpense from '../components/FormAddExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormAddExpense />
      </>
    );
  }
}

export default Wallet;
