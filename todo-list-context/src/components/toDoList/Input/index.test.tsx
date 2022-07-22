import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import Input from './index';

describe('<ToDoInput/>', () => {
  it('renders component correctly', () => {
    const { container } = render(<Input value="default value" onChange={() => jest.fn()} />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders placeholder correctly', () => {
    render(<Input value="default value" onChange={() => jest.fn()} />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요 :)');
    expect(input).toBeInTheDocument();
  });

  it('change the data', () => {
    render(<Input value="study tdd" onChange={() => jest.fn()} />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요 :)') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'study tdd' } });
    expect(input.value).toBe('study tdd');
  });
});
