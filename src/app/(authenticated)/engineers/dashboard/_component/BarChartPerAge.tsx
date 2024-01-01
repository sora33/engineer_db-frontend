"use client";
import { BarChart, Card, Title } from "@tremor/react";
import { AgeDistribution } from "@/app/(authenticated)/engineers/dashboard/_component/type";
import { valueFormatter } from "@/app/(authenticated)/engineers/dashboard/_component/function";

type Props = {
  ageDistribution: AgeDistribution;
};

export const BarChartPerAge: React.FC<Props> = ({ ageDistribution }) => {
  const chartdata = [
    {
      name: "20歳未満",
      "利用者数(人)": ageDistribution.under_20_years,
    },
    {
      name: "20~29歳",
      "利用者数(人)": ageDistribution["20_29_years"],
    },
    {
      name: "30~39歳",
      "利用者数(人)": ageDistribution["30_39_years"],
    },
    {
      name: "40~49歳",
      "利用者数(人)": ageDistribution["40_49_years"],
    },
    {
      name: "50~59歳",
      "利用者数(人)": ageDistribution["50_59_years"],
    },
    {
      name: "60~69歳",
      "利用者数(人)": ageDistribution["60_69_years"],
    },
    {
      name: "70歳以上",
      "利用者数(人)": ageDistribution.over_70_years,
    },
  ];
  return (
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
};
