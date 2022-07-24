import styled, { keyframes } from 'styled-components';

export const Container = styled.main`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  justify-content: center;
  font-size: calc(10px + 1.6vmin);
  color: #282c34;
`;

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 4vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Spin} infinite 20s linear;
  }
`;

export const Link = styled.h1`
  font-size: 2rem;
  color: #61dafb;
`;

export const Wrapper = styled.main`
  box-sizing: border-box;
  text-align: center;
  min-height: 60vh;
  width: 40vh;
  margin: auto;
  padding: 20px 20px;
  color: white;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const ListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  font-size: calc(10px + 1vmin);
  color: black;
`;
