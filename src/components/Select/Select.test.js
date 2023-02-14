import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Component -> Select -> ', () => {
  it('Is presented in the document:', () => {
    render(<Select />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });
  it('Has appropriate option name:', () => {
    const props = {
      defaultValue: 1,
      options: [
        { name: 'Option Name 1', value: 0 },
        { name: 'Option Name 2', value: 1 },
      ],
    };
    render(<Select {...props} />);
    expect(screen.getByText('Option Name 2')).toHaveAttribute('selected', '');
  });
});
