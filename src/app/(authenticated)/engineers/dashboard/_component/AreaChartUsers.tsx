"use client";
import { AreaChart, Card, Title } from "@tremor/react";

const chartdata3 = [
  {
    date: "12/1",
    全体: 167,
    男性: 145,
    女性: 135,
    その他: 115,
  },
  {
    date: "12/2",
    全体: 125,
    男性: 110,
    女性: 155,
    その他: 85,
  },
  {
    date: "12/3",
    全体: 156,
    男性: 149,
    女性: 145,
    その他: 90,
  },
  {
    date: "12/4",
    全体: 165,
    男性: 112,
    女性: 125,
    その他: 105,
  },
];
export const AreaChartUsers = () => {
  return (
    <Card className="relative mx-auto max-w-2xl p-8">
      <div className="absolute inset-0 z-20 flex items-center justify-center rounded bg-slate-500 opacity-50">
        <p className="bg-white p-2 text-sm text-black">
          現在、データが少ないので表示できません。
        </p>
      </div>
      <Title className="!text-base">「エンジニアDB」の利用者数の推移</Title>
      <AreaChart
        className="mt-4"
        data={chartdata3}
        index="date"
        categories={["全体", "男性", "女性", "その他"]}
        colors={["gray", "indigo-300", "rose-200", "green-300"]}
        yAxisWidth={30}
      />
    </Card>
  );
};
