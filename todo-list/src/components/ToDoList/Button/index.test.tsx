import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import Button from './index';

describe('<Button/>', () => {
  it('renders components correctly', () => {
    const { container } = render(<Button text="TEST" onClick={() => jest.fn()} />);

    const text = screen.getByText('TEST');
    expect(text).toBeInTheDocument();

    expect(text).toHaveStyleRule('background-color', '#304FFE');
    // expect(text).toHaveStyleRule('background-color:', '#1E40FF', { modifier: ':hover' });

    expect(container).toMatchSnapshot();
  });

  it('Clicks the button', () => {
    const handleClick = jest.fn();
    render(<Button text="TEST" onClick={handleClick} />);

    const text = screen.getByText('TEST');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(text);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
