import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Input } from 'semantic-ui-react';

// 액션 크리에이터 함수 불러오기
import { changeReduxConnectDemo } from './actionCreators';

// [mapStateToProps]
// 스토어의 상태를 불러와 컴포넌트 props 속성으로 맵핑
const mapState = (state) => ({
  reduxConnectDemo: state.reduxConnectDemo,
});

// [mapDispatchToProps]
// 액션 크리에이터 함수를 불러와 컴포넌트 props 속성으로 맵핑
const mapActions = {
  changeReduxConnectDemo,
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
  handleChangeContent = (e) => {
    const { value } = e.target;
    const { changeReduxConnectDemo } = this.props;

    value.length > 0
      ? changeReduxConnectDemo(value)
      : changeReduxConnectDemo(this.state.initialContent);
  };

  // 라이프 사이클 훅
  componentDidMount() {
    this.setState({
      initialContent: this.props.reduxConnectDemo,
    });
  }

  // 렌더링
  render() {
    const { reduxConnectDemo } = this.props;

    return (
      <Container text>
        <Header as="h2" size="small" color="blue">
          {reduxConnectDemo}
        </Header>
        <p>입력 필드에 내용을 입력하면 Redux의 상태를 변경하는 액션을 전달(dispatched Action) 합니다.</p>
        <Input
          fluid
          icon="react"
          aria-label="Redux 상태 정보 변경"
          placeholder="변경항 상태 정보를 입력해보세요."
          onInput={this.handleChangeContent}
          onClick={(e) => e.target.select()}
        />
      </Container>
    );
  }
}

// connect() 고차 컴포넌트(curring 함수) 랩핑
export default connect(mapState, mapActions)(ReduxConnectDemo);
