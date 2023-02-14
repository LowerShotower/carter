import React from 'react';
const ListSkeleton = () => {
  return (
    <div className="flex w-full flex-col items-stretch">
      <progress className="progress my-3 w-full"></progress>
      <progress className="progress my-3 w-full"></progress>
      <progress className="progress my-3 w-full"></progress>
      <progress className="progress my-3 w-full"></progress>
      <progress className="progress my-3 w-full"></progress>
      <progress className="progress my-3 w-full"></progress>
    </div>
  );
};

export default ListSkeleton;
