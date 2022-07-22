import React from "react";
import ToDoInput from "../ToDoInput";
import ToDoItemList from "../ToDoItemList";
import { ToDoListProvider } from "Contexts/ToDoList";
import * as S from "./styles";

const ToDoList = () => (
  <ToDoListProvider>
    <S.Wrapper>
      ToDoList
      <S.ListWrapper>
        <ToDoInput />
        <ToDoItemList />
      </S.ListWrapper>
    </S.Wrapper>
  </ToDoListProvider>
);

export default ToDoList;
