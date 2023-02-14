import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Component -> Home -> ', () => {
  it('Is presented in the document:', () => {
    render(<Home />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
