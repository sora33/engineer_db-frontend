import { Heading, LinkText } from "@/components/atoms";
import { AreaChartUsers } from "@/app/(authenticated)/engineers/dashboard/_component/AreaChartUsers";
import { BarChartPerAge } from "@/app/(authenticated)/engineers/dashboard/_component/BarChartPerAge";
import { DonutChartPurpose } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartPurpose";
import { DonutChartOccupation } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartOccupation";
import { DonutChartWork } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartWork";
import { cookies } from "next/headers";
import { DashBoard } from "@/app/(authenticated)/engineers/dashboard/_component/type";

export default async function Page() {
  const token = cookies().get("next-auth.session-token")?.value;
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

  return (
    <>
      <div className="grid gap-8 pb-4">
        <section>
          <Heading as="h2" size="md">
            ダッシュボード
          </Heading>
          <LinkText className="text-orange-500" href="/engineers">
            「エンジニアを検索」はこちら
          </LinkText>
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
