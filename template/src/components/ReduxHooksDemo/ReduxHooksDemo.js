import React, { Fragment, useCallback, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Card,
  Image,
  Button,
  Header,
  Segment,
  Icon,
  Message,
} from 'semantic-ui-react';

// 코드 문법 하이라이팅 참고: https://highlightjs.org/static/demo
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// 액션 생성 함수(Action Creator) 불러오기
import { changeReduxHooksDemo, fetchDataAsync } from './actions';

/**
 * ReduxHooksDemo 컴포넌트
 */
const ReduxHooksDemo = () => {
  // Redux 상태 가져오기
  const { cards, loading } = useSelector((state) => ({
    cards: state.reduxHooksDemo,
    loading: state.loading,
  }));

  //컴포넌트 상태
  const [ isFetchData, setIsFetchData ] = useState(false);

  // 디스패치 가져오기
  const dispatch = useDispatch();

  // 핸들러
  const handleRemoveCard = useCallback(
    (removeId) => dispatch(changeReduxHooksDemo(removeId)),
    [ dispatch ]
  );

  // 사이드 이펙트
  useEffect(
    () => {
      dispatch(
        // 비동기 통신 요청
        fetchDataAsync('//euid-blended-learning.firebaseio.com/people.json')
      );
    },
    [ dispatch ]
  );

  // 로딩 중인 상태의 렌더링
  if (!isFetchData && loading) {
    // 최초 1회 로딩 후, 더 이상 로딩되지 않도록 설정
    setIsFetchData(true);
    return <div>로딩 중.........</div>;
  }

  // 렌더링
  return (
    <Container style={{ marginBottom: '5rem' }}>
      <Header as="h2" size="medium" color="teal">
        React Redux, Hooks + Functional 컴포넌트 데모
      </Header>

      <p>
        카드의 제거 버튼을 클릭하면 Redux의 상태를 변경하는 액션을 전달(dispatched Action) 하여 상태를 업데이트
        합니다.
      </p>

      <Card.Group doubling itemsPerRow={3} stackable>
        {cards.map((card) => (
          <Card key={card.id}>
            <Image src={card.avatar} />
            <Card.Content>
              <Fragment>
                <Card.Header>{card.header}</Card.Header>
                <Card.Meta>{card.date}</Card.Meta>
                <Card.Description>{card.description}</Card.Description>
              </Fragment>
            </Card.Content>
            <Card.Content extra>
              <Button type="button" disabled icon="plus" content="추가" />
              <Button
                type="button"
                icon="trash"
                content="제거"
                onClick={() => handleRemoveCard(card.id)}
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <Header
        as="h3"
        size="tiny"
        textAlign="left"
        style={{ color: '#777', marginTop: '3rem' }}
      >
        <Icon name="database" size="tiny" />
        Redux 스토어 상태
      </Header>

      <Message positive={!!cards.length} negative={cards.length === 0}>
        <Message.Header>
          {cards.length ? (
            `Redux 스토어 상태 개수는 ${cards.length}개 입니다.`
          ) : (
            'Redux 스토어 상태 비워졌습니다.'
          )}
        </Message.Header>
      </Message>

      <Segment textAlign="left" piled style={{ padding: '0 1em' }}>
        <SyntaxHighlighter language="json" style={githubGist}>
          {JSON.stringify(cards, null, 2)}
        </SyntaxHighlighter>
      </Segment>
    </Container>
  );
};

export default ReduxHooksDemo;
