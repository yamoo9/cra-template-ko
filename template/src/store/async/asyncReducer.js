import {
  ASYNC_LOADING_START,
  ASYNC_LOADING_FINISH,
  ASYNC_LOADING_ERROR,
} from './asyncActionTypes';

export const asyncLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case ASYNC_LOADING_START:
      return true;
    case ASYNC_LOADING_FINISH:
    case ASYNC_LOADING_ERROR:
      return false;
    default:
      return state;
  }
};
