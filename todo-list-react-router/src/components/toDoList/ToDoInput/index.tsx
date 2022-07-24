import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import { ToDoListContext } from 'contexts/ToDoList';

const ToDoInput = () => {
  const [toDo, setTodo] = useState('');
  const { addToDo } = useContext(ToDoListContext);

  return (
    <InputWrapper>
      <Input placeholder="할 일을 입력해 주세요 :)" value={toDo} onChange={setTodo} />
      <Button
        text={'ADD'}
        onClick={() => {
          addToDo(toDo);
          setTodo('');
        }}
      />
    </InputWrapper>
  );
};

export default ToDoInput;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;

  input + button {
    margin-left: 8px;
  }
`;
