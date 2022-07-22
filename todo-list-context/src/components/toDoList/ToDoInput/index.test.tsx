import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'Contexts/ToDoList';
import ToDoInput from './index';

describe('<ToDoInput />', () => {
  it('renders component correctly', () => {
    const { container } = render(<ToDoInput />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요 :)');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('ADD');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('empties data after adding data', () => {
    render(<ToDoInput />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요 :)') as HTMLInputElement;
    const button = screen.getByText('ADD');

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'study react test' } });
    expect(input.value).toBe('study react test');
    fireEvent.click(button);
    expect(input.value).toBe('');
  });

  it('adds input data to localStorage via Context', () => {
    render(
      <ToDoListProvider>
        <ToDoInput />
      </ToDoListProvider>,
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요 :)');
    const button = screen.getByText('ADD');

    expect(localStorage.getItem('ToDoList')).toBeNull();

    fireEvent.change(input, { target: { value: 'study react test' } });
    fireEvent.click(button);

    expect(localStorage.getItem('ToDoList')).toBe('[{"id":1,"toDo":"study react test"}]');
  });
});
