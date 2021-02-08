/**
 * Rounds the number to the nearest decimal point. Inspired by a Medium article
 * @param value
 * @param decimals
 */
export const round = (value: number, decimals = 2): number => {
  const factorOfTen = Math.pow(10, decimals);
  return Math.round(value * factorOfTen) / factorOfTen;
};
