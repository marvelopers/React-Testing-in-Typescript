import React, { useContext } from 'react';
import { ToDoListContext } from 'contexts/ToDoList';
import styled from 'styled-components';

import ToDoItem from '../ToDoItem';

const ToDoItemList = () => {
  const { toDoList, deleteItem } = useContext(ToDoListContext);

  return (
    <List data-testid="toDoList">
      {toDoList.map(({ id, toDo }) => (
        <ToDoItem key={id} text={toDo} onClick={() => deleteItem(id)} />
      ))}
    </List>
  );
};

export default ToDoItemList;

export const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: auto;
  padding: 10px;
  list-style: none;
`;
