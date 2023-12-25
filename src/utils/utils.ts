export const formatNumber = (number): number => {
  //   return number.toLocaleString();
  //   return new Intl.NumberFormat('ru-RU').format(number);
  return new Intl.NumberFormat('se-SE').format(number);
};
