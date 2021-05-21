import React, { useEffect } from 'react';
import Gradient from './components/Gradient';
import styled from 'styled-components';
import { getRandomColor } from './utils/helpers';
import useForceUpdate from './utils/hooks/useForceUpdate';

const AppContainer = styled.div`
  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  transition: all 3s ease-in-out;
  background-color: ${props => props.background};
  background-color: -webkit-linear-gradient(to right, ${props => props.background}, ${props => props.backgroundBottom})
  background-color: linear-gradient(to right, ${props => props.background}, ${props => props.backgroundBottom});
`;

function App() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    setTimeout(() => forceUpdate(), 3000)
  });
  return (
    <AppContainer
      background={getRandomColor()}
      backgroundBottom={getRandomColor()}
    >
      <header className="App-header" />
      <Gradient />
    </AppContainer>
  );
}

export default App;
