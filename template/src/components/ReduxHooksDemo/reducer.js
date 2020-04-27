import {
  FETCH_PEOPLE_API_START,
  FETCH_PEOPLE_API_FINISH,
  FETCH_PEOPLE_API_ERROR,
  REMOVE_CARD,
} from './actionTypes';

// 초기 상태
const initialState = {
  data: [],
  loading: false,
  error: false,
};

// 리듀서
export default function reduxHooksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PEOPLE_API_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PEOPLE_API_FINISH:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_PEOPLE_API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case REMOVE_CARD:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
