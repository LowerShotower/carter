import React from 'react';

const Header = () => {
  return (
    <>
      <h2 className=" prose prose-2xl text-center">
        Awarding points based on each recorded purchase
      </h2>
      <sub>
        A customer receives 2 points for every dollar spent over $100 in each
        transaction, plus 1 point for every dollar spent over $50 in each
        transaction (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
      </sub>{' '}
    </>
  );
};

export default Header;
