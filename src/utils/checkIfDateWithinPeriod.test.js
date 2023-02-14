import { PERIODS } from '../pages/Home/Home';
import { checkIfDateWithinPeriod } from './checkIfDateWithinPeriod';

describe('Utility -> checkIfDateWithinPeriod function ->', () => {
  it('pass undefined', () => {
    const value = checkIfDateWithinPeriod(undefined, PERIODS.ALL);
    expect(value).toEqual(false);
  });
  it('pass new Date', () => {
    const value = checkIfDateWithinPeriod(new Date(), PERIODS.ALL);
    expect(value).toEqual(false);
  });
  it('pass yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const value = checkIfDateWithinPeriod(yesterday, PERIODS.ALL);
    expect(value).toEqual(true);
  });
  it('pass month before', () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    date.setMonth(date.getMonth() - 1);
    const value = checkIfDateWithinPeriod(date, PERIODS.SECOND_MONTH);
    expect(value).toEqual(true);
  });
  it('pass negative number', () => {
    const value = checkIfDateWithinPeriod(-1, PERIODS.ALL);
    expect(value).toEqual(false);
  });
  it('pass string', () => {
    const value = checkIfDateWithinPeriod('string', PERIODS.ALL);
    expect(value).toEqual(false);
  });
  it('pass object like value', () => {
    const value = checkIfDateWithinPeriod({}, PERIODS.ALL);
    expect(value).toEqual(false);
  });
  it('pass  number ', () => {
    const value = checkIfDateWithinPeriod(25, PERIODS.ALL);
    expect(value).toEqual(false);
  });

  it('pass BigInt', () => {
    const value = checkIfDateWithinPeriod(
      BigInt('9007199254740991'),
      PERIODS.ALL
    );
    expect(value).toEqual(false);
  });
  it('pass boolean', () => {
    const value = checkIfDateWithinPeriod(false, PERIODS.ALL);
    expect(value).toEqual(false);
  });
  it('pass Symbol', () => {
    const value = checkIfDateWithinPeriod(Symbol('test'), PERIODS.ALL);
    expect(value).toEqual(false);
  });
});
