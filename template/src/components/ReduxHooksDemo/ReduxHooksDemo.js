import _ from 'lodash';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React, { Fragment, useCallback } from 'react';
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

import { changeReduxHooksDemo } from './actions';

// 스타일 컴포넌트
const StyledContainer = styled(Container)`
  margin-bottom: 5rem;
`;

/**
 * ReduxHooksDemo 컴포넌트
 */
const ReduxHooksDemo = () => {
  // Redux 상태 가져오기
  const cards = useSelector((state) => state.reduxHooksDemo);

  // 디스패치 가져오기
  const dispatch = useDispatch();

  // 핸들러
  const handleRemoveCard = useCallback(
    (removeId) => {
      dispatch(changeReduxHooksDemo(removeId));
    },
    [ dispatch ]
  );

  // 렌더링
  return (
    <StyledContainer>
      <Header as="h2" size="medium" color="teal">
        React Redux, Hooks + Functional 컴포넌트 데모
      </Header>

      <p>
        카드의 제거 버튼을 클릭하면 Redux의 상태를 변경하는 액션을 전달(dispatched Action) 하여 상태를 업데이트
        합니다.
      </p>

      <Card.Group doubling itemsPerRow={3} stackable>
        {_.map(cards, (card) => (
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

      <Message positive={cards.length} negative={cards.length === 0}>
        <Message.Header>
          {cards.length ? (
            `Redux 스토어 상태 개수는 ${cards.length}개 입니다.`
          ) : (
            'Redux 스토어 상태 비워졌습니다.'
          )}
        </Message.Header>
      </Message>

      <Segment textAlign="left" piled style={{ padding: '0 1em' }}>
        <SyntaxHighlighter language="json" style={arduinoLight}>
          {JSON.stringify(cards, null, 2)}
        </SyntaxHighlighter>
      </Segment>
    </StyledContainer>
  );
};

export default ReduxHooksDemo;
