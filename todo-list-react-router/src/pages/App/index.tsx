import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { ToDoListProvider } from 'contexts/ToDoList';
import List from 'pages/List';
import Add from 'pages/Add';
import * as S from './styles';

function App() {
  return (
    <ToDoListProvider>
      <S.Container>
        <S.Header>
          <S.Link>TO DO LIST MADE WITH</S.Link>
          <S.Logo src={logo} alt="logo" />
        </S.Header>
        <S.Wrapper>
          <S.ListWrapper>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/add" element={<Add />} />
            </Routes>
          </S.ListWrapper>
        </S.Wrapper>
      </S.Container>
    </ToDoListProvider>
  );
}

export default App;
