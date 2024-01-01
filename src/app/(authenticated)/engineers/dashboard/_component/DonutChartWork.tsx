"use client";
import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "正社員",
    sales: 9800,
  },
  {
    name: "フリーランス",
    sales: 4567,
  },
  {
    name: "経営者",
    sales: 3908,
  },
  {
    name: "学生",
    sales: 2400,
  },
  {
    name: "その他",
    sales: 1908,
  },
];

export const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("ja-JP").format(number)} 人`;

export const DonutChartWork = () => (
  <Card className="mx-auto max-w-2xl p-8">
    <Title>働き方</Title>
    <DonutChart
      className="mt-6"
      data={cities}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["rose-900", "rose-700", "rose-500", "rose-300", "slate"]}
    />
  </Card>
);
