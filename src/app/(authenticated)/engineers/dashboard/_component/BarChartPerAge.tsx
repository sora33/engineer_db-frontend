"use client";
import { BarChart, Card, Title } from "@tremor/react";

const chartdata = [
  {
    name: "20歳未満",
    "利用者数(人)": 2488,
  },
  {
    name: "20~29歳",
    "利用者数(人)": 1445,
  },
  {
    name: "30~39歳",
    "利用者数(人)": 743,
  },
  {
    name: "40~49歳",
    "利用者数(人)": 281,
  },
  {
    name: "50~59歳",
    "利用者数(人)": 251,
  },
  {
    name: "60~69歳",
    "利用者数(人)": 232,
  },
  {
    name: "70歳以上",
    "利用者数(人)": 98,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export const BarChartPerAge = () => (
  <Card className="mx-auto max-w-2xl p-8">
    <Title>年齢別の利用者数</Title>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["利用者数(人)"]}
      colors={["amber"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  </Card>
);
