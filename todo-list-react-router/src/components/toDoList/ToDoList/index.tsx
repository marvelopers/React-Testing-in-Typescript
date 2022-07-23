import React, { useState } from 'react';
import Button from '../Button';
import ToDoItem from '../ToDoItem';
import ToDoInput from '../ToDoInput';
import * as S from './styles';

const ToDoList = () => {
  const [toDo, setTodo] = useState('');
  const [toDoList, setTodoList] = useState<{ id: number; toDo: string }[]>([]);

  const handleChange = (toDo: string) => setTodo(toDo);
  const handleAddToDo = () => {
    if (toDo) {
      setTodoList((prev) => [...prev, { id: prev.length + 1, toDo: toDo }]);
      setTodo('');
    }
  };
  return (
    <S.Wrapper>
      ToDoList
      <S.ListWrapper>
        <S.InputWrapper>
          <ToDoInput value={toDo} onChange={handleChange} />
          <Button text={'ADD'} onClick={handleAddToDo} />
        </S.InputWrapper>
        <S.List data-testid="toDoList">
          {toDoList.map(({ id, toDo }) => (
            <ToDoItem
              key={id}
              text={toDo}
              onClick={() => setTodoList((prev) => prev.filter((item) => item.id !== id))}
            />
          ))}
        </S.List>
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default ToDoList;
