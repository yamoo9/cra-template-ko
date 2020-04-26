import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// 리듀서
import demoReduxConnectReducer from '~/components/ReduxConnectDemo/reducer';
import demoReduxHooksReducer from '~/components/ReduxHooksDemo/reducer';

// 리듀서 병합
const rootReducer = combineReducers({
  reduxConnectDemo: demoReduxConnectReducer,
  reduxHooksDemo: demoReduxHooksReducer,
});

// 미들웨어
const middleWares = [ thunk ];

// 스토어 생성
export const store = createStore(
  rootReducer,
  // Redux 개발 도구 및 미들웨어 연결
  composeWithDevTools(applyMiddleware(...middleWares))
);

// 스토어 공급자 래퍼 컴포넌트
export const StoreProvider = (props) => (
  <Provider store={store}>{props.children}</Provider>
);
