import React from 'react';
import logo from './logo.svg';
import ToDoList from 'components/toDoList/ToDoList';
import * as S from './styles';

function App() {
  return (
    <S.Container>
      <S.Header>
        <S.Link>TO DO LIST MADE WITH</S.Link>
        <S.Logo src={logo} alt="logo" />
      </S.Header>
      <ToDoList />
    </S.Container>
  );
}

export default App;
