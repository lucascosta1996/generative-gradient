import styled from 'styled-components';
import React, { useEffect } from 'react';
import { getRandomArbitrary, getRandomColor } from '../utils/helpers';
import useForceUpdate from '../utils/hooks/useForceUpdate';

const Colors = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  position: absolute;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  box-shadow: 10px 10px 187px 259px ${props => props.color};
  z-index: 2;
  transition: all 3s ease-in-out;
`;

function Gradient() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    setTimeout(() => forceUpdate(), 3000)
  });

  return (
    <>
      {
        Array.from(Array(30).keys()).map(item => (
          <Colors
            color={getRandomColor()}
            left={getRandomArbitrary(0, 90)}
            top={getRandomArbitrary(0, 90)}
            size={getRandomArbitrary(80, 100)}
          />
        ))
      }
    </>
  );
}

export default Gradient;
