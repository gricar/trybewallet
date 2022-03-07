import { ADD_EXPENSE, GET_CURRENCIES_QUOTATIONS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case GET_CURRENCIES_QUOTATIONS:
    return {
      ...state,
      currencies: [action.currencies],
    };
  default:
    return state;
  }
};

export default wallet;
