import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// 미들웨어
const middlewares = [ thunk ];

// 루트 리듀서
import rootReducer from './rootReducer';

// 스토어 생성
export const store = createStore(
  rootReducer,
  // Redux 개발 도구 및 미들웨어 연결
  composeWithDevTools(applyMiddleware(...middlewares))
);

// 스토어 공급자 래퍼 컴포넌트
export const StoreProvider = (props) => (
  <Provider store={store}>{props.children}</Provider>
);
