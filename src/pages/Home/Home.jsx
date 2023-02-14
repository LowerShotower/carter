import React, { useEffect, useState } from 'react';
import PointsTable from '../../components/PointsTable/PointsTable';
import ListSkeleton from '../../components/skeletons/ListSkeleton/ListSkeleton';
import LineSkeleton from '../../components/skeletons/LineSkeleton/LineSkeleton';
import urls from '../../services/urls';
import useFetch from '../../utils/hooks/useFetch';
import Select from './../../components//Select/Select';
import { calculatePoints } from '../../utils/calculatePoints';
import { checkIfDateWithinPeriod } from './../../utils/checkIfDateWithinPeriod';
import Header from '../../components/Header/Header';

const DEFAULT_USER_INDEX = 0;
const POINTS_INDEX_IN_ROW = 4;

export const PERIODS = Object.freeze({
  ALL: 'All',
  FIRST_MONTH: 'First month',
  SECOND_MONTH: 'Second month',
  THIRD_MONTH: 'Third month',
});

const Home = () => {
  const [user, setUser] = useState(null);
  const [period, setPeriod] = useState(PERIODS.ALL);

  const [customers, triggerCustomersFetch, isCustomersFetching] = useFetch(
    urls.getCustomersUrl
  );
  const [transactions, triggerTransactionsFetch, isTransactionsFetching] =
    useFetch(urls.getTransactionsUrl);

  useEffect(() => {
    const cancelCustomersFetch = triggerCustomersFetch();
    const cancelTransactionsFetch = triggerTransactionsFetch();
    return () => {
      cancelCustomersFetch();
      cancelTransactionsFetch();
    };
  }, []);

  useEffect(() => {
    setUser(customers?.data?.[DEFAULT_USER_INDEX]?.id);
  }, [customers]);

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const customersOptions = customers?.data?.map((customer) => ({
    name: customer.name,
    value: customer.id,
  }));

  const periodsOptions = Object.keys(PERIODS).map((period) => ({
    name: PERIODS[period],
    value: PERIODS[period],
  }));

  const rows =
    transactions?.data
      ?.filter(({ customerId, date }) => {
        return customerId === user && checkIfDateWithinPeriod(date, period);
      })
      .map(({ date, amount, id }, index) => {
        return [
          id,
          index + 1,
          date.toDateString(),
          amount,
          calculatePoints(amount),
        ];
      }) || [];

  const footerCells = [
    '',
    '',
    'Total: ',
    rows?.reduce((sum, row) => (sum += row[POINTS_INDEX_IN_ROW]), 0),
  ];
  console.log(isTransactionsFetching, isCustomersFetching);
  return (
    <div
      data-testid="home-page"
      className="shadow-sm md:container md:mx-auto md:p-3"
    >
      <Header />
      <div className="flex justify-end py-3">
        {(isCustomersFetching === null || isCustomersFetching) && !user ? (
          <LineSkeleton />
        ) : (
          <>
            <Select
              onChange={handlePeriodChange}
              defaultValue={period}
              options={periodsOptions}
            />
            <Select
              onChange={handleUserChange}
              defaultValue={user}
              options={customersOptions}
            />
          </>
        )}
      </div>
      {isTransactionsFetching === null ||
      isTransactionsFetching ||
      isCustomersFetching === null ||
      isCustomersFetching ||
      !user ? (
        <ListSkeleton />
      ) : (
        <PointsTable
          columns={[
            'N',
            'Date Of Purchase',
            'Expenses',
            'Amount Of Earned Points',
          ]}
          rows={rows}
          footerCells={footerCells}
        />
      )}
    </div>
  );
};

export default Home;
