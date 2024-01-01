"use client";
import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "エンジニア",
    sales: 9800,
  },
  {
    name: "プロジェクトマネージャー",
    sales: 4567,
  },
  {
    name: "コンサルタント",
    sales: 3908,
  },
  {
    name: "データアナリスト",
    sales: 2400,
  },
  {
    name: "CTO・技術顧問",
    sales: 1908,
  },
  {
    name: "その他",
    sales: 1398,
  },
];

export const valueFormatter = (number: number) =>
  `${new Intl.NumberFormat("ja-JP").format(number)} 人`;

export const DonutChartOccupation = () => (
  <Card className="mx-auto max-w-2xl p-8">
    <Title>職種</Title>
    <DonutChart
      className="mt-6"
      data={cities}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={[
        "green-900",
        "green-700",
        "green-500",
        "green-300",
        "green-100",
        "slate",
      ]}
    />
  </Card>
);
