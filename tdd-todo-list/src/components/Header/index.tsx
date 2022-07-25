import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const titleMap = {
  '/': 'CHECK YOUR TO DO LIST',
  '/add': 'ADD TO DO',
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      {pathname !== '/' ? <GoBack to="/">GO BACK</GoBack> : <span />}
      <Title>{titleMap[pathname as keyof typeof titleMap]}</Title>
      <GoToAdd to="/add">GO TO ADD</GoToAdd>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1``;

const Button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border: none;
  background-color: #efefef;
  border-radius: 8px;
  cursor: pointer;
`;

const GoBack = styled(Link)`
  ${Button}
  color: inherit;
  text-decoration: none;
`;

const GoToAdd = styled(Link)`
  ${Button}
  color: inherit;
  text-decoration: none;
`;
