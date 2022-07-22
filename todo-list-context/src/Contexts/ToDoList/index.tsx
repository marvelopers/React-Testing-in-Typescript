import React, { createContext, useState, ReactNode, useEffect } from "react";

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
  const [toDoList, setToDoList] = useState<{ id: number; toDo: string }[]>([]);
  const addToDo = (toDo: string) => {
    if (toDo) {
      setToDoList((prev) => [...prev, { id: prev.length + 1, toDo: toDo }]);
    }
  };

  const deleteItem = (id: number) =>
    setToDoList((prev) => prev.filter((item) => item.id !== id));

  useEffect(() => {
    const list = localStorage.getItem("ToDoList");
    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    if (toDoList) {
      localStorage.setItem("ToDoList", JSON.stringify(toDoList));
    }
  }, [toDoList]);

  return (
    <ToDoListContext.Provider value={{ toDoList, addToDo, deleteItem }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListProvider };
