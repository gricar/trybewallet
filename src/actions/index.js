// Actions Types
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

// Actions Creators
export const login = (value) => ({
  type: LOGIN,
  value,
});

export const addExpense = (currencies, itemAdded) => ({
  type: ADD_EXPENSE,
  currencies,
  expenses: itemAdded,
});
