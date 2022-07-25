import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { MemoryRouter } from 'react-router-dom';

import Header from './index';

describe('Header', () => {
  it('renders component correctly', () => {
    const route = '/';

    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>,
    );

    const title = screen.getByText('CHECK TO DO LIST');
    expect(title).toBeInTheDocument();
  });

  it('renders component correctly with /add URL', () => {
    const route = '/add';

    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>,
    );

    const title = screen.getByText('ADD TO DO');
    expect(title).toBeInTheDocument();
  });
});
