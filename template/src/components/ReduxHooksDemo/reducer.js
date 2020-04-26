import { DEMO_REDUX_HOOKS, FETCH_PEOPLE_API } from './actionTypes';

const initialState = [];

export default function reduxHooksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_API:
      return action.payload;
    case DEMO_REDUX_HOOKS:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
