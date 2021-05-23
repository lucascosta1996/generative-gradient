import React, { useEffect, useState } from 'react';
import GradientSpheres from './components/GradientSpheres';
import GradientLinear from './components/GradientLinear';
import GradientRadial from './components/GradientRadial';
import styled from 'styled-components';
import { getRandomColor } from './utils/helpers';
import useForceUpdate from './utils/hooks/useForceUpdate';
import { BrowserRouter as Router, Route, useHistory, Link } from 'react-router-dom';

const AppContainer = styled.div`
  background-color: ${props => props.background};
  background-color: -webkit-linear-gradient(to right, ${props => props.background}, ${props => props.backgroundBottom})
  background-color: linear-gradient(to right, ${props => props.background}, ${props => props.backgroundBottom});
  min-height: 100vh;
  transition: all 3s ease-in-out;
  
  ul {
    li {
      a {
        color: white;
        font-size: 28px;
        font-family: 'Raleway', sans-serif;
        text-decoration: none;
        transition: all 1s ease-in-out;

        &:hover {
          color: transparent;
        }
      }
    }
  }

  .versions {
    position: fixed;
    left: 20%;
    list-style: none;
    top: 50%;
  }
`;

function App() {
  const forceUpdate = useForceUpdate();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => forceUpdate(), 3000)
  });

  return (
    <AppContainer
      background={getRandomColor()}
      backgroundBottom={getRandomColor()}
    >
      <Router>
        <Route exact path="/" render={() => (
          <ul className="versions">
            <li>
              <Link to="/spheres">
                Spheres
              </Link>
            </li>
            <li>
              <Link to="/linear">
                Linear
              </Link>
            </li>
            <li>
              <Link to="/radial">
                Radial
              </Link>
            </li>
          </ul>
        )} />
        <Route path="/spheres" render={() => (<GradientSpheres onClick={() => history.push("/")} />)} />
        <Route path="/linear" render={() => (<GradientLinear onClick={() => history.push("/")} />)} />
        <Route path="/radial" render={() => (<GradientRadial onClick={() => history.push("/")} />)} />
      </Router>
    </AppContainer>
  );
}

export default App;
