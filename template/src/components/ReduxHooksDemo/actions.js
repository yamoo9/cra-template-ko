import { FETCH_PEOPLE_API, DEMO_REDUX_HOOKS } from './actionTypes';
import {
  asyncLoadingStart,
  asyncLoadingFinish,
  asyncLoadingError,
} from '~/store/async/asyncActions';

// 액션 크리에이터 함수
export const fetchData = (json) => ({
  type: FETCH_PEOPLE_API,
  payload: json,
});

export const changeReduxHooksDemo = (value) => ({
  type: DEMO_REDUX_HOOKS,
  payload: value,
});

// 비동기 액션 크리에이터 함수
export const fetchDataAsync = (apiAdress) => {
  return async (dispatch) => {
    dispatch(asyncLoadingStart());
    try {
      const res = await fetch(apiAdress);
      const json = await res.json();
      dispatch(asyncLoadingFinish());
      dispatch(fetchData(json.data));
    } catch (error) {
      dispatch(asyncLoadingError());
      console.error(error.message);
    }
  };
};
