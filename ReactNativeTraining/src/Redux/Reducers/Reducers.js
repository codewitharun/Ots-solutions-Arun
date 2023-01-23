import {LOGIN_USER} from '../Type/Type';

const initialState = {
  login: [],
};
function fromReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, login: action.payload};

    default:
      return state;
  }
}

export default fromReducer;
