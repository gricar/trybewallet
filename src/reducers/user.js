import { LOGIN } from '../actions';

// const INITIAL_STATE = { email: '' };

const user = (state = {}, action) => {
  switch (action.type) {
  case LOGIN:
    return action.value;
  default:
    return state;
  }
};

export default user;
