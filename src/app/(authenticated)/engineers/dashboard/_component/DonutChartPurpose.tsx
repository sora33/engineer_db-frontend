"use client";
import { Card, DonutChart, Title } from "@tremor/react";
import { PurposeDistribution } from "@/app/(authenticated)/engineers/dashboard/_component/type";
import { valueFormatter } from "@/app/(authenticated)/engineers/dashboard/_component/function";

type Props = {
  purposeDistribution: PurposeDistribution;
};

export const DonutChartPurpose: React.FC<Props> = ({ purposeDistribution }) => {
  const cities = [
    {
      name: "一緒に開発する人を探したい",
      sales: purposeDistribution.partner,
    },
    {
      name: "仕事を探している",
      sales: purposeDistribution.work,
    },
    {
      name: "趣味・プライベートの友達を探したい",
      sales: purposeDistribution.hobby,
    },
    {
      name: "その他",
      sales: purposeDistribution.other,
    },
  ];

  return (
    <Card className="mx-auto max-w-2xl p-8">
      <Title className="!text-base">ご利用目的</Title>
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
};
