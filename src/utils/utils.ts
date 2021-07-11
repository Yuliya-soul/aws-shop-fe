const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'BYN',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);