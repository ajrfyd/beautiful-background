import React, { useRef, useEffect } from "react";
import styled, { keyframes } from 'styled-components';

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const circle = () => {
    if(!containerRef.current) return;

    let amount = 100;

    let i = 0;
    while(i < amount) {
      let element = document.createElement('i');
      let posX = Math.floor(Math.random() * window.innerWidth);

      let size = Math.random() * 250;
      let delay = Math.random() * -20;
      let duration = Math.random() * 10;

      element.style.width = 10 + size + 'px';
      element.style.height = 10 + size + 'px';
      element.style.left = posX + 'px';
      element.style.animationDelay = delay + 's';
      element.style.animationDuration = 5 + duration + 's';
      element.style.boxShadow = '0 30px 50px #0002';

      containerRef.current.appendChild(element);
      i++;
    }
  };

  useEffect(() => {
    circle();
  }, []);

  return (
    <Container ref={containerRef}>
      <H2>Happy <br /> Independence <br /> Day </H2>
    </Container>
  )
}

export default App;

const animate = keyframes`
  0% {
    transform: translateY(calc(100vh + 350px));
  }

  100% {
    transform: translateY(-300px);
  }
`

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background: #fff;

  i {
    position: absolute;
    display: block;
    background: #000;
    border-radius: 50%;
    animation: ${animate} 5s linear infinite;
    /* z-index: 1; */

    &:nth-child(5n + 1) {
      background: #fff;
    } 
    &:nth-child(5n + 2) {
      background: #ff9933;
    }
    &:nth-child(5n + 3) {
      background: #fff;
      border: 5px solid #ff9933;
      z-index: 1;
    }
    &:nth-child(5n + 4) {
      background: #2bd11b;
      z-index: 2;
    }
    &:nth-child(5n + 5) {
      background: #2bd11b;
    }
  }
`

const H2 = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  font-size: 12vw;
  font-weight: 800;
  color: #333;
  text-transform: uppercase;
`