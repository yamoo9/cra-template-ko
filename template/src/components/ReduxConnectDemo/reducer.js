import {
  CHANGE_STATE,
  CHANGE_STATE_START,
  CHANGE_STATE_FINISH,
  CHANGE_STATE_ERROR,
} from './actionTypes';

const initState = {
  data: 'React Redux, Connect HOC + Class 컴포넌트 데모',
  loading: false,
  error: false,
};

export default function demoReducer(state = initState, action) {
  switch (action.type) {
    // 동기
    case CHANGE_STATE:
      return {
        ...state,
        data: action.payload,
      };

    // 비동기
    case CHANGE_STATE_START:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_STATE_FINISH:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CHANGE_STATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    // 기본 값
    default:
      return state;
  }
}
