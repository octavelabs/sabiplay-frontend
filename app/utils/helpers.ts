export function formatCurrency(value = 0) {
  const formatter = Intl.NumberFormat(undefined, { minimumFractionDigits: 2 });
  return formatter.format(value);
}