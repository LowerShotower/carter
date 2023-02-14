import { PERIODS } from '../pages/Home/Home';

export const checkIfDateWithinPeriod = (date, period) => {
  if (!(date instanceof Date)) {
    return false;
  }
  const startDate = new Date();
  const endDate = new Date();

  switch (period) {
    case PERIODS.ALL:
      startDate.setMonth(startDate.getMonth() - 3);
      break;
    case PERIODS.FIRST_MONTH:
      startDate.setMonth(startDate.getMonth() - 3);
      endDate.setMonth(endDate.getMonth() - 2);
      break;
    case PERIODS.SECOND_MONTH:
      startDate.setMonth(startDate.getMonth() - 2);
      endDate.setMonth(endDate.getMonth() - 1);
      break;
    case PERIODS.THIRD_MONTH:
      startDate.setMonth(startDate.getMonth() - 1);
      break;
    default:
      break;
  }
  return (
    date.getTime() > startDate.getTime() && date.getTime() < endDate.getTime()
  );
};
