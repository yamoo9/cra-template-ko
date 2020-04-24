import { combineReducers } from 'redux';

// 리듀서
import demoReduxConnectReducer from '~/components/ReduxConnectDemo/reducer';
import demoReduxHooksReducer from '~/components/ReduxHooksDemo/reducer';

// 리듀서 병합
const rootReducer = combineReducers({
  reduxConnectDemo: demoReduxConnectReducer,
  reduxHooksDemo: demoReduxHooksReducer,
});

export default rootReducer;
