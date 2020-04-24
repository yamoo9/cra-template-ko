import { DEMO_REDUX_HOOKS } from './constants';

const initialState = [
  {
    id: 'jkwdsda',
    avatar:
      'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/woman/02.jpg',
    date: '2013년 가입',
    header: '소연',
    description: '소연은 React 라이브러리 학습을 좋아합니다.',
  },
  {
    id: 'jijwk',
    avatar:
      'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/man/03.jpg',
    date: '2016년 가입',
    header: '상우',
    description: '상우는 React 마스터 레벨 사용자입니다.',
  },
  {
    id: 'klljlwe',
    avatar:
      'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces/woman/04.jpg',
    date: '2011년 가입',
    header: '주민',
    description: '주민은 Redux를 사용한 상태 관리에 익숙합니다.',
  },
];

export default function reduxHooksReducer(state = initialState, action) {
  switch (action.type) {
    case DEMO_REDUX_HOOKS:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
