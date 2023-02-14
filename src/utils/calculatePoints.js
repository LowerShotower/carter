export const calculatePoints = (amount) => {
  if (typeof amount === 'bigint' || typeof amount === 'symbol') return 0;
  let points = 0;
  amount - 50 > 0 && (points += amount - 50);
  amount - 100 > 0 && (points += amount - 100);
  return points;
};
