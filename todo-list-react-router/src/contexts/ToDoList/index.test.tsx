import React, { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ToDoListContext, ToDoListProvider } from './index';

beforeEach(() => {
  localStorage.clear();
});

describe('ToDoList Context', () => {
  it('renders component correctly', () => {
    const ChildComponent = () => {
      return <div>Child Component</div>;
    };

    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBeNull();
  });

  it('loads localStorage data and sets it to State', () => {
    localStorage.setItem('ToDoList', '[{"id":1,"toDo":"ToDo 1"},{"id":2,"toDo":"ToDo 2"}]');

    const ChildComponent = () => {
      const { toDoList } = useContext(ToDoListContext);

      return (
        <div>
          {toDoList.map(({ id, toDo }) => (
            <div key={toDo}>{toDo}</div>
          ))}
        </div>
      );
    };

    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    expect(screen.getByText('ToDo 1')).toBeInTheDocument();
    expect(screen.getByText('ToDo 2')).toBeInTheDocument();
  });

  it('uses addToDo function', () => {
    const ChildComponent = () => {
      const { toDoList, addToDo } = useContext(ToDoListContext);
      return (
        <div>
          <div onClick={() => addToDo('study react test')}>ADD</div>
          <div>
            {toDoList.map(({ id, toDo }) => (
              <div key={toDo}>{toDo}</div>
            ))}
          </div>
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    expect(localStorage.getItem('ToDoList')).toBeNull();
    const button = screen.getByText('ADD');
    fireEvent.click(button);
    expect(screen.getByText('study react test')).toBeInTheDocument();
    expect(localStorage.getItem('ToDoList')).toBe('[{"id":1,"toDo":"study react test"}]');
  });

  it('uses deleteToDo function', () => {
    localStorage.setItem('ToDoList', '[{"id":1,"toDo":"ToDo 1"},{"id":2,"toDo":"ToDo 2"}]');

    const ChildComponent = () => {
      const { toDoList, deleteItem } = useContext(ToDoListContext);
      return (
        <div>
          {toDoList.map(({ id, toDo }) => (
            <div key={id} onClick={() => deleteItem(id)}>
              {toDo}
            </div>
          ))}
        </div>
      );
    };
    render(
      <ToDoListProvider>
        <ChildComponent />
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem);
    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
  });
});
