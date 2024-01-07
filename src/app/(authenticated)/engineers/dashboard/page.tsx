import { Heading, LinkText, Description } from "@/components/atoms";
import { AreaChartUsers } from "@/app/(authenticated)/engineers/dashboard/_component/AreaChartUsers";
import { BarChartPerAge } from "@/app/(authenticated)/engineers/dashboard/_component/BarChartPerAge";
import { DonutChartPurpose } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartPurpose";
import { DonutChartOccupation } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartOccupation";
import { DonutChartWork } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartWork";
import { useAuthToken } from "@/hooks/useJwtToken";
import { DashBoard } from "@/app/(authenticated)/engineers/dashboard/_component/type";

export default async function Page() {
  const token = useAuthToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dashboard`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const data: DashBoard = await res.json();
  // console.log(data);

  return (
    <>
      <div className="grid gap-8 pb-4">
        <section>
          <LinkText className="text-sm text-orange-500" href="/engineers">
            「エンジニア一覧（検索）」はこちら
          </LinkText>
          <Heading as="h2" size="md">
            ダッシュボード
          </Heading>
          <Description className="text-sm">
            エンジニアの属性を集計したダッシュボードです。エンジニアの属性を知りたいときにご活用ください。
            <br />
            「こんなデータがあったら面白い！」というアイデアがあれば、ぜひご連絡お待ちしております🙇‍♂️
          </Description>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <DonutChartPurpose
              purposeDistribution={data.purpose_distribution}
            />
            <DonutChartOccupation
              occupationDistribution={data.occupation_distribution}
            />
            <DonutChartWork workDistribution={data.work_distribution} />
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <AreaChartUsers />
            <BarChartPerAge ageDistribution={data.age_distribution} />
          </div>
        </section>
      </div>
    </>
  );
}
