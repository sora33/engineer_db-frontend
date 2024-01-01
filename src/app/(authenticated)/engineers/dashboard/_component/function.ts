export const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("ja-JP").format(number)} 人`;
