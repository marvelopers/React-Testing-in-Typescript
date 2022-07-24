import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'contexts/ToDoList';
import ToDoItemList from './index';

describe('<ToDoList />', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <ToDoListProvider>
        <ToDoItemList />
      </ToDoListProvider>,
    );

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    expect(container).toMatchSnapshot();
  });

  it('shows toDo list', () => {
    localStorage.setItem('ToDoList', '[{"id":1,"toDo":"ToDo 1"},{"id":2,"toDo":"ToDo 2"}]');

    render(
      <ToDoListProvider>
        <ToDoItemList />
      </ToDoListProvider>,
    );

    expect(screen.getByText('ToDo 1')).toBeInTheDocument();
    expect(screen.getByText('ToDo 2')).toBeInTheDocument();
    expect(screen.getAllByText('x').length).toBe(2);
  });

  it('deletes toDo item', () => {
    localStorage.setItem('ToDoList', '[{"id":1,"toDo":"ToDo 1"},{"id":2,"toDo":"ToDo 2"}]');

    render(
      <ToDoListProvider>
        <ToDoItemList />
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem.nextElementSibling as HTMLElement);
    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
  });
});
