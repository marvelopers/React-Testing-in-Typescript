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

    const goToAdd = screen.getByText('GO TO ADD');
    expect(goToAdd).toBeInTheDocument();

    const title = screen.getByText('CHECK YOUR TO DO LIST');
    expect(title).toBeInTheDocument();
  });

  it('renders component correctly with /add URL', () => {
    const route = '/add';

    render(
      <MemoryRouter initialEntries={[route]}>
        <Header />
      </MemoryRouter>,
    );
    const goBack = screen.getByText('GO BACK');
    expect(goBack).toBeInTheDocument();

    const goToAdd = screen.getByText('GO TO ADD');
    expect(goToAdd).toBeInTheDocument();

    expect(goBack.getAttribute('href')).toBe('/');

    const title = screen.getByText('ADD TO DO');
    expect(title).toBeInTheDocument();
  });
});
