// Actions Types
export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

// export const REQUEST_COINS_QUOTATIONS = 'REQUEST_COINS_QUOTATIONS';
export const GET_COINS_QUOTATIONS = 'GET_COINS_QUOTATIONS';

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

export const getCoinsQuotations = (data) => ({
  type: GET_COINS_QUOTATIONS,
  data,
});

export function fetchQuotations() {
  return async (dispatch) => {
    try {
      // dispatch(requestAPI());
      const URL = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(URL);
      const data = await response.json();
      dispatch(getCoinsQuotations(data));
    } catch (error) {
      console.error(error);
    }
  };
}
