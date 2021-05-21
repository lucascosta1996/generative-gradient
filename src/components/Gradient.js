import React from 'react';
import styled from 'styled-components';
import { getRandomArbitrary, getRandomColor } from '../utils/helpers';

const Colors = styled.div`
  background-color: ${props => props.color};
  border-radius: ${props => props.borderRadius};
  position: absolute;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  box-shadow: 10px 10px 187px 259px ${props => props.color};
  z-index: 2;
  transition: all 4s ease-in-out;
`;

function Gradient() {
  const radius = `${getRandomArbitrary(0, 90)}% ${getRandomArbitrary(0, 90)}% ${getRandomArbitrary(0, 90)}% ${getRandomArbitrary(0, 90)}%`

  return (
    <>
      {
        Array.from(Array(30).keys()).map(item => (
          <Colors
            key={item}
            color={getRandomColor()}
            left={getRandomArbitrary(0, 90)}
            top={getRandomArbitrary(0, 90)}
            size={getRandomArbitrary(80, 100)}
            borderRadius={radius}
          />
        ))
      }
    </>
  );
}

export default Gradient;
