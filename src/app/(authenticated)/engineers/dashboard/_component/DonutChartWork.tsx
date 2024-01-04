"use client";
import { Card, DonutChart, Title } from "@tremor/react";
import { WorkDistribution } from "@/app/(authenticated)/engineers/dashboard/_component/type";
import { valueFormatter } from "@/app/(authenticated)/engineers/dashboard/_component/function";

type Props = {
  workDistribution: WorkDistribution;
};

export const DonutChartWork: React.FC<Props> = ({ workDistribution }) => {
  const cities = [
    {
      name: "正社員",
      sales: workDistribution.fullTime,
    },
    {
      name: "フリーランス",
      sales: workDistribution.freelancer,
    },
    {
      name: "経営者",
      sales: workDistribution.businessOwner,
    },
    {
      name: "学生",
      sales: workDistribution.student,
    },
    {
      name: "その他",
      sales: workDistribution.other,
    },
  ];

  return (
    <Card className="mx-auto max-w-2xl p-8">
      <Title className="!text-base">働き方</Title>
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
};
