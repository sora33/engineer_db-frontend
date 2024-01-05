"use client";
import { Card, DonutChart, Title } from "@tremor/react";
import {
  OccupationDistribution,
  PurposeDistribution,
} from "@/app/(authenticated)/engineers/dashboard/_component/type";
import { valueFormatter } from "@/app/(authenticated)/engineers/dashboard/_component/function";

type Props = {
  occupationDistribution: OccupationDistribution;
};

export const DonutChartOccupation: React.FC<Props> = ({
  occupationDistribution,
}) => {
  const cities = [
    {
      name: "エンジニア",
      sales: occupationDistribution.engineer,
    },
    {
      name: "プロジェクトマネージャー",
      sales: occupationDistribution.projectManager,
    },
    {
      name: "コンサルタント",
      sales: occupationDistribution.consultant,
    },
    {
      name: "データアナリスト",
      sales: occupationDistribution.dataAnalyst,
    },
    {
      name: "CTO・技術顧問",
      sales: occupationDistribution.cto,
    },
    {
      name: "その他",
      sales: occupationDistribution.other,
    },
  ];
  return (
    <Card className="mx-auto max-w-2xl p-8">
      <Title className="!text-base">職種</Title>
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
};
