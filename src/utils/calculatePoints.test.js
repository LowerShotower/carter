import { calculatePoints } from './calculatePoints';

describe('Utility -> calculatePoints function ->', () => {
  it('pass undefined', () => {
    const value = calculatePoints(undefined);
    expect(value).toEqual(0);
  });
  it('pass negative number', () => {
    const value = calculatePoints(-1);
    expect(value).toEqual(0);
  });
  it('pass string', () => {
    const value = calculatePoints('string');
    expect(value).toEqual(0);
  });
  it('pass object like value', () => {
    const value = calculatePoints({});
    expect(value).toEqual(0);
  });
  it('pass positive value < 50', () => {
    const value = calculatePoints(25);
    expect(value).toEqual(0);
  });
  it('pass positive value > 50, < 100', () => {
    const value = calculatePoints(75);
    expect(value).toEqual(25);
  });
  it('pass positive value > 100', () => {
    const value = calculatePoints(125);
    expect(value).toEqual(100);
  });
  it('pass BigInt', () => {
    const value = calculatePoints(BigInt('9007199254740991'));
    expect(value).toEqual(0);
  });
  it('pass boolean', () => {
    const value = calculatePoints(false);
    expect(value).toEqual(0);
  });
  it('pass Symbol', () => {
    const value = calculatePoints(Symbol('test'));
    expect(value).toEqual(0);
  });
});
