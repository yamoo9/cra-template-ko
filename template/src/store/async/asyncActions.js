import {
  ASYNC_LOADING_START,
  ASYNC_LOADING_FINISH,
  ASYNC_LOADING_ERROR,
} from './asyncActionTypes';

// 액션 크리에이터 함수
export const asyncLoadingStart = () => ({
  type: ASYNC_LOADING_START,
});
export const asyncLoadingFinish = () => ({
  type: ASYNC_LOADING_FINISH,
});
export const asyncLoadingError = () => ({
  type: ASYNC_LOADING_ERROR,
});
