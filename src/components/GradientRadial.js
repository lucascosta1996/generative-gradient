import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getRandomArbitrary, getRandomRgba } from '../utils/helpers';

const Colors = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  box-shadow: 10px 10px ${props => props.size + 87}px ${props => props.size + 159}px ${props => props.color};
  height: ${props => props.size}px;
  position: absolute;
  transition: all 3s ease-in-out;
  width: ${props => props.size}px;
  z-index: ${props => props.zIndex};
`;

const RadialWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
`;

function GradientRadial({ onClick }) {

  return (
    <RadialWrapper onClick={() => onClick()}>
      {
        Array.from(Array(80).keys()).map(item => (
          <Colors
            key={item}
            color={getRandomRgba()}
            left={getRandomArbitrary(0, 90)}
            size={item * 3}
            zIndex={item}
          />
        ))
      }
    </RadialWrapper>
  );
}

export default GradientRadial;
