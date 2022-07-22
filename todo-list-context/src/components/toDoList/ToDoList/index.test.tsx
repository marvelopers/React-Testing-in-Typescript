/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import ToDoList from './index';

describe('<ToDoList/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<ToDoList />);

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요 :)');
    expect(input).toBeInTheDocument();

    const text = screen.getByText('ADD');
    expect(text).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('add and delete To Do items', () => {
    render(<ToDoList />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요 :)');
    const addButton = screen.getByText('ADD');
    fireEvent.change(input, { target: { value: 'react testing' } });
    fireEvent.click(addButton);

    const toDoItem = screen.getByText('react testing');
    expect(toDoItem).toBeInTheDocument();
    const deleteButton = screen.getByText('x');
    expect(deleteButton).toBeInTheDocument();

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: 'coding' } });
    fireEvent.click(addButton);

    const toDoItem2 = screen.getByText('coding');
    expect(toDoItem2).toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(2);

    const deleteButtons = screen.getAllByText('x');
    fireEvent.click(deleteButtons[0]);

    expect(toDoItem).not.toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(1);
  });
});
