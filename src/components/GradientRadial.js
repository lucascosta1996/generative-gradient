import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRandomArbitrary, getRandomRgba } from '../utils/helpers';

const RadialWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
`;

const Gradient1 = styled.div`
  position: fixed;
  background: radial-gradient(
    circle,
    ${({ color1 }) => color1} 0%,
    ${({ color2 }) => color2} 11%,
    ${({ color3 }) => color3} 21%,
    ${({ color4 }) => color4} 29%,
    ${({ color5 }) => color5} 38%,
    ${({ color6 }) => color6} 48%,
    ${({ color7 }) => color7} 58%,
    ${({ color8 }) => color8} 66%,
    ${({ color9 }) => color9} 74%,
    ${({ color10 }) => color10} 84%,
    ${({ color11 }) => color11} 91%,
    ${({ color12 }) => color12} 95%,
    ${({ color13 }) => color13} 100%
  );
  height: 100vh;
  width: 100%;
  opacity: 0;
  ${({ newGradient }) => !newGradient ? 'opacity: 0;' : 'opacity: 1;'}
  transition: all 2s ease-in-out;
  z-index: 0;
`;

const Gradient2 = styled.div`
  position: fixed;
  background: radial-gradient(
    circle,
    ${({ color1 }) => color1} 0%,
    ${({ color2 }) => color2} 11%,
    ${({ color3 }) => color3} 21%,
    ${({ color4 }) => color4} 29%,
    ${({ color5 }) => color5} 38%,
    ${({ color6 }) => color6} 48%,
    ${({ color7 }) => color7} 58%,
    ${({ color8 }) => color8} 66%,
    ${({ color9 }) => color9} 74%,
    ${({ color10 }) => color10} 84%,
    ${({ color11 }) => color11} 91%,
    ${({ color12 }) => color12} 95%,
    ${({ color13 }) => color13} 100%
  );
  height: 100vh;
  width: 100%;
  opacity: 1;
  ${({ newGradient }) => newGradient ? 'opacity: 0;' : 'opacity: 1;'}
  transition: all 2s ease-in-out;
  z-index: 2;
;
`;

function GradientRadial({ onClick }) {
  const [ changeGradient, setChangeGradient ] = useState(true);
  const [ colorsGradient1, setColorsGradient1 ] = useState([]);
  const [ colorsGradient2, setColorsGradient2 ] = useState([]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setChangeGradient(changeGradient => {
        if (changeGradient) {
          setColorsGradient2(generateColors());
        } else {
          setColorsGradient1(generateColors());
        }
        return !changeGradient
      });
    }, 3000);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    setColorsGradient1(generateColors());
    setColorsGradient2(generateColors());
  }, []);

  const generateColors = () => {
    let newColorsArray = []
    Array.from(Array(13).keys()).map(() => {
      newColorsArray.push(getRandomRgba());
    })
    return newColorsArray;
  }

  return (
    <RadialWrapper
      onClick={() => onClick()}
    >
      <Gradient1
        newGradient={changeGradient}
        color1={colorsGradient1[0]}
        color2={colorsGradient1[1]}
        color3={colorsGradient1[2]}
        color4={colorsGradient1[3]}
        color5={colorsGradient1[4]}
        color6={colorsGradient1[5]}
        color7={colorsGradient1[6]}
        color8={colorsGradient1[7]}
        color9={colorsGradient1[8]}
        color10={colorsGradient1[9]}
        color11={colorsGradient1[10]}
        color12={colorsGradient1[11]}
        color13={colorsGradient1[12]}
      />
      <Gradient2
        newGradient={changeGradient}
        color1={colorsGradient2[0]}
        color2={colorsGradient2[1]}
        color3={colorsGradient2[2]}
        color4={colorsGradient2[3]}
        color5={colorsGradient2[4]}
        color6={colorsGradient2[5]}
        color7={colorsGradient2[6]}
        color8={colorsGradient2[7]}
        color9={colorsGradient2[8]}
        color10={colorsGradient2[9]}
        color11={colorsGradient2[10]}
        color12={colorsGradient2[11]}
        color13={colorsGradient2[12]}
      />
    </RadialWrapper>
  );
}

export default GradientRadial;
