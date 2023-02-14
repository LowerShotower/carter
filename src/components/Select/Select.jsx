import React from 'react';

const Select = ({ defaultValue, options, onChange }) => {
  return (
    <select
      data-testid="select"
      className="select select-xs m-0 ml-1"
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {options?.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
