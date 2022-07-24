import React from 'react';
import ToDoInput from '../ToDoInput';
import ToDoItemList from '../ToDoItemList';
import * as S from './styles';

const ToDoList = () => (
  <S.ListWrapper>
    <ToDoInput />
    <ToDoItemList />
  </S.ListWrapper>
);

export default ToDoList;
