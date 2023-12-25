export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('se-SE').format(number);
};
