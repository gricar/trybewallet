import {
  ADD_EXPENSE, REMOVE_EXPENSE, REQUEST_CURRENCIES, GET_CURRENCIES_QUOTATIONS,
} from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
      isFetching: false,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.expenseItemId),
      isFetching: false,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES_QUOTATIONS:
    return {
      ...state,
      currencies: action.currencies,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default wallet;
