import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getRandomArbitrary, getRandomRgba } from '../utils/helpers';

const Colors = styled.div`
  background-color: ${props => props.color};
  box-shadow: 10px 10px 180px 200px ${props => props.color};
  height: 100vh;
  left: ${props => props.left}%;
  position: absolute;
  top: 0;
  transition: all 3s ease-in-out;
  width: ${props => props.size};
`;

function GradientLinear({ onClick }) {

  return (
    <div onClick={() => onClick()}>
      {
        Array.from(Array(40).keys()).map(item => (
          <Colors
            key={item}
            color={getRandomRgba()}
            left={getRandomArbitrary(0, 90)}
            size={getRandomArbitrary(20, 40)}
          />
        ))
      }
    </div>
  );
}

export default GradientLinear;
