import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// 루트 리듀서
import rootReducer from './rootReducer';

// 스토어 생성
// Redux 개발 도구 연결
export const store = createStore(rootReducer, composeWithDevTools());

// 스토어 공급자 래퍼 컴포넌트
export const StoreProvider = (props) => (
  <Provider store={store}>{props.children}</Provider>
);
