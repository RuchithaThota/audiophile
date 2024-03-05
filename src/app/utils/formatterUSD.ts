const formatterUSD = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatToUSD(amounts: number[]) {
  return amounts.map((amount) => formatterUSD.format(amount));
}
