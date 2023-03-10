import React from 'react';

const Header = () => {
  return (
    <div className="mb-3 flex h-auto flex-col items-center ">
      <h2 className="prose prose-2xl mb-3 w-full text-center">
        Awarding points based on each recorded purchase
      </h2>
      <p className=" w-full text-center">
        A customer receives 2 points for every dollar spent over $100 in each
        transaction, plus 1 point for every dollar spent over $50 in each
        transaction (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
      </p>{' '}
    </div>
  );
};

export default Header;
