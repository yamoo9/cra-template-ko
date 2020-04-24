import React from 'react';

/**
 * App 컴포넌트
 */
const App = (props) => {
  const [ componentName ] = React.useState('App 컴포넌트');
  return <div>{componentName}</div>;
};

export default App;
