import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { ToDoListProvider } from 'contexts/ToDoList';
import ToDoList from 'components/toDoList/ToDoList';
import * as S from './styles';

function App() {
  return (
    <ToDoListProvider>
      <S.Container>
        <S.Header>
          <S.Link>TO DO LIST MADE WITH</S.Link>
          <S.Logo src={logo} alt="logo" />
        </S.Header>
        <Routes>
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </S.Container>
    </ToDoListProvider>
  );
}

export default App;
