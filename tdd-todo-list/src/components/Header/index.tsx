import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const titleMap = {
  '/': 'CHECK TO DO LIST',
  '/add': 'ADD TO DO',
};

const Header = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Title>{titleMap[location.pathname as keyof typeof titleMap]}</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section``;

const Title = styled.div``;
