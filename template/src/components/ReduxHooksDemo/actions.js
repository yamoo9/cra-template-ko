import {
  REMOVE_CARD,
  FETCH_PEOPLE_API_START,
  FETCH_PEOPLE_API_FINISH,
  FETCH_PEOPLE_API_ERROR,
} from './actionTypes';

// 액션 크리에이터 함수
export const removeCard = (removeID) => ({
  type: REMOVE_CARD,
  payload: removeID,
});

const fetchPeopleApiStart = () => ({
  type: FETCH_PEOPLE_API_START,
});
const fetchPeopleApiFinish = (data) => ({
  type: FETCH_PEOPLE_API_FINISH,
  payload: data,
});
const fetchPeopleApiError = (error) => ({
  type: FETCH_PEOPLE_API_ERROR,
  error,
});

// 비동기 액션 크리에이터 함수
export const fetchPeopleApiAsync = (apiAdress) => {
  return async (dispatch) => {
    dispatch(fetchPeopleApiStart());
    try {
      const res = await fetch(apiAdress);
      const json = await res.json();
      dispatch(fetchPeopleApiFinish(json.data));
    } catch (error) {
      dispatch(fetchPeopleApiError(error));
    }
  };
};
