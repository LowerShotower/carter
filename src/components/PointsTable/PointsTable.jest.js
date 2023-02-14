import React from 'react';
import { render, screen } from '@testing-library/react';
import PointsTable from './PointsTable';

describe('Component -> PointsTable -> ', () => {
  it('Is presented in the document:', () => {
    render(<PointsTable />);
    expect(screen.getByTestId('points-table')).toBeInTheDocument();
  });
  it('Has appropriate exact number of rows', () => {
    const props = {
      rows: [
        ['id1', 'value', 'value', 'value'],
        ['id2', 'value', 'value', 'value'],
      ],
    };
    render(<PointsTable {...props} />);
    const rows = screen.getAllByRole('tr');
    expect(rows).toHaveLength(2);
  });
});
