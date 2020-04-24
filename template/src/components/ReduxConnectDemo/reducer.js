import { DEMO_REDUX_CONNNECT } from './constants';

const initState = 'React Redux, Connect HOC + Class 컴포넌트 데모';

export default function demoReducer(state = initState, action) {
  switch (action.type) {
    case DEMO_REDUX_CONNNECT:
      return action.payload;
    default:
      return state;
  }
}
