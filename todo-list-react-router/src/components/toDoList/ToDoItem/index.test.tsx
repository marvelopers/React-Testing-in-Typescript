import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import ToDoItem from './index';

describe('<ToDoItem/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<ToDoItem text="default text" onClick={() => jest.fn()} />);

    const toDoItem = screen.getByText('default text');
    expect(toDoItem).toBeInTheDocument();

    const deleteButton = screen.getByText('x');
    expect(deleteButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Clicks the x button', () => {
    const handleClick = jest.fn();
    render(<ToDoItem text="default text" onClick={handleClick} />);

    const deleteButton = screen.getByText('x');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
