import React from 'react';
import ToDoItemList from 'components/toDoList/ToDoItemList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();

  return (
    <>
      <AddButton onClick={() => navigate('/add')}>ADD TO DO</AddButton>
      <ToDoItemList />
    </>
  );
};

export default List;

const AddButton = styled.button`
  width: 100%;
  height: 40px;
  margin: auto;
  margin-bottom: 60px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  outline: none;
  background-color: #61dafb;
  border: 1px solid #61dafb;
  color: #fff;
`;
