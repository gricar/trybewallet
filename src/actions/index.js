// Actions Types
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCIES_QUOTATIONS = 'GET_CURRENCIES_QUOTATIONS';

// Actions Creators
export const login = (value) => ({
  type: LOGIN,
  value,
});

const addExpense = (exchangeRates, itemAdded) => ({
  type: ADD_EXPENSE,
  expenses: {
    ...itemAdded, exchangeRates,
  },
});

const getCurrenciesQuotations = (exchangeRates) => ({
  type: GET_CURRENCIES_QUOTATIONS,
  currencies: exchangeRates,
});

export function fetchQuotations(itemAdded) {
  return async (dispatch) => {
    try {
      const URL = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(URL);
      const exchangeRates = await response.json();
      if (!itemAdded) {
        dispatch(getCurrenciesQuotations(exchangeRates));
      } else {
        dispatch(addExpense(exchangeRates, itemAdded));
      }
    } catch (error) {
      console.error(error);
    }
  };
}
