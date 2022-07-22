import React, { createContext, useState, ReactNode } from "react";

interface Context {
  toDoList: { id: number; toDo: string }[];
  addToDo: (toDo: string) => void;
  deleteItem: (id: number) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  addToDo: (): void => {},
  deleteItem: (): void => {},
});

interface ToDoListProviderProps {
  children: ReactNode;
}

const ToDoListProvider = ({ children }: ToDoListProviderProps) => {
  const [toDoList, setTodoList] = useState<{ id: number; toDo: string }[]>([]);
  const addToDo = (toDo: string) => {
    if (toDo) {
      setTodoList((prev) => [...prev, { id: prev.length + 1, toDo: toDo }]);
    }
  };

  const deleteItem = (id: number) =>
    setTodoList((prev) => prev.filter((item) => item.id !== id));

  return (
    <ToDoListContext.Provider value={{ toDoList, addToDo, deleteItem }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListProvider };
