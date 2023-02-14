import React from 'react';

const ID_INDEX = 0;

const PointsTable = ({ columns, rows, footerCells }) => {
  return (
    <div data-testid="points-table" className="overflow-x-auto">
      <table className="table-zebra table w-full">
        <thead>
          <tr>
            {columns?.map((columnName) => {
              return <th key={columnName}>{columnName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => {
            return (
              <tr key={`${row[ID_INDEX]}`}>
                {row.slice(1, row.length).map((cell, index) => {
                  return <th key={index}>{cell}</th>;
                })}
              </tr>
            );
          })}
        </tbody>
        {footerCells && (
          <tfoot>
            <tr>
              {footerCells?.map((cell, index) => {
                return (
                  <th className="prose text-gray-dark" key={index}>
                    {cell}
                  </th>
                );
              })}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default PointsTable;

PointsTable.defaultProps = {
  columns: [],
  rows: [],
  footerCells: [],
};
