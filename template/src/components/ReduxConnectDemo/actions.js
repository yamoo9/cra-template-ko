import { delay } from '~/utils';

import {
  CHANGE_STATE,
  CHANGE_STATE_START,
  CHANGE_STATE_FINISH,
  CHANGE_STATE_ERROR,
} from './actionTypes';

/**
 * 동기(sync) 액션 생성 함수
 */
const changeStateStart = () => ({
  type: CHANGE_STATE_START,
});
const changeStateFinish = (inputData) => ({
  type: CHANGE_STATE_FINISH,
  payload: inputData,
});
const changeStateError = (error) => ({
  type: CHANGE_STATE_ERROR,
  error,
});

export const changeReduxConnectDemo = (value) => ({
  type: CHANGE_STATE,
  payload: value,
});

/**
 * 비동기(async) 액션 생성 함수
 */
export const changeReduxConnectDemoAsync = (value, ms = 1000) => {
  // Redux Thunk 미들웨어를 사용할 경우,
  // dispatch를 전달 받는 함수를 반환하여 시간을 지연 시켜 처리할 수 있습니다.
  return (dispatch) => {
    dispatch(changeStateStart());
    // 전달 받은 밀리초(ms) 대기 후, 액션 디스패치
    return delay(ms).then(
      // 승인(resolve)
      () => dispatch(changeStateFinish(value)),
      // 거절(reject)
      (error) => dispatch(changeStateError(error))
    );
  };
};
