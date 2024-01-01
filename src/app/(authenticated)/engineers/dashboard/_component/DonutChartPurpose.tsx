"use client";
import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "一緒に開発する人を探したい",
    sales: 9800,
  },
  {
    name: "仕事を探している",
    sales: 4567,
  },
  {
    name: "趣味・プライベートの友達を探したい",
    sales: 3908,
  },
  {
    name: "その他",
    sales: 2400,
  },
];

export const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("ja-JP").format(number)} 人`;

export const DonutChartPurpose = () => (
  <Card className="mx-auto max-w-2xl p-8">
    <Title>ご利用目的</Title>
    <DonutChart
      className="mt-6"
      data={cities}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["blue-900", "blue-700", "blue-500", "slate"]}
    />
  </Card>
);
