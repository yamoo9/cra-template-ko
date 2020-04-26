import { DEMO_REDUX_CONNNECT } from './constants';
import { delay } from '~/utils';

// 동기(sync) 액션 함수
export const changeReduxConnectDemo = (value) => {
  return {
    type: DEMO_REDUX_CONNNECT,
    payload: value,
  };
};

// 비동기(async) 액션 생성 함수
export const changeReduxConnectDemoAsync = (value, ms = 1000) => {
  // Redux Thunk 미들웨어를 사용할 경우,
  // dispatch를 전달 받는 함수를 반환하여 시간을 지연 시켜 처리할 수 있습니다.
  return (dispatch) => {
    // 전달 받은 밀리초(ms) 대기 후, 액션 디스패치
    return delay(ms).then(() => {
      console.log(`${ms}초 지난 후 실행`);
      dispatch(changeReduxConnectDemo(value));
    });
  };
};
