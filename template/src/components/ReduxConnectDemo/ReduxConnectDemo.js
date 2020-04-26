import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Input } from 'semantic-ui-react';

// 액션 크리에이터 함수 불러오기
import {
  // 동기 액션 크리에이터 함수
  changeReduxConnectDemo,
  // 비동기 액션 크리에이터 함수
  changeReduxConnectDemoAsync,
} from './actions';

// [mapStateToProps]
// 스토어의 상태를 불러와 컴포넌트 props 속성으로 맵핑
const mapState = (state) => ({
  reduxConnectDemo: state.reduxConnectDemo,
  loading: state.loading,
});

// [mapDispatchToProps]
// 액션 크리에이터 함수를 불러와 컴포넌트 props 속성으로 맵핑
const mapActions = {
  changeReduxConnectDemo,
  changeReduxConnectDemoAsync,
};

/**
 * ConnectStoreDemo 컴포넌트
 */
class ReduxConnectDemo extends Component {
  // 로컬 상태
  state = {
    initialContent: '',
  };

  // 메서드
  // 변경이 잦을 경우, 성능 문제를 야기하므로 디바운스(debounce) 처리
  handleChangeContent = _.debounce(({ value }) => {
    const { changeReduxConnectDemo, changeReduxConnectDemoAsync } = this.props;

    value.length > 0
      ? changeReduxConnectDemoAsync(value, 500) // 0.5초 지난 후, 액션 디스패치(전달)
      : changeReduxConnectDemo(this.state.initialContent); // 즉시 액션 디스패치(전달)
  }, 200);

  // 라이프 사이클 훅
  componentDidMount() {
    this.setState({
      initialContent: this.props.reduxConnectDemo,
    });
  }

  // 렌더링
  render() {
    const { reduxConnectDemo, loading } = this.props;

    return (
      <Container text>
        <Header as="h2" size="small" color="blue">
          {loading ? '로딩 중...' : reduxConnectDemo}
        </Header>
        <p>입력 필드에 내용을 입력하면 비동기(시간 지연)적으로 Redux의 상태를 변경하는 액션을 디스패치 합니다.</p>
        <Input
          fluid
          icon="react"
          aria-label="Redux 상태 정보 변경"
          placeholder="변경항 상태 정보를 입력해보세요."
          onChange={(e) => this.handleChangeContent(e.target)}
          onClick={(e) => e.target.select()}
        />
      </Container>
    );
  }
}

// connect() 고차 컴포넌트(curring 함수) 랩핑
export default connect(mapState, mapActions)(ReduxConnectDemo);
