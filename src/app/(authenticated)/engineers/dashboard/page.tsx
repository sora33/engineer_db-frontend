import { Heading, LinkText } from "@/components/atoms";
import { AreaChartUsers } from "@/app/(authenticated)/engineers/dashboard/_component/AreaChartUsers";
import { BarChartPerAge } from "@/app/(authenticated)/engineers/dashboard/_component/BarChartPerAge";
import { DonutChartPurpose } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartPurpose";
import { DonutChartOccupation } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartOccupation";
import { DonutChartWork } from "@/app/(authenticated)/engineers/dashboard/_component/DonutChartWork";

export default function Page() {
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
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <AreaChartUsers />
            <BarChartPerAge />
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <DonutChartPurpose />
            <DonutChartOccupation />
            <DonutChartWork />
          </div>
        </section>
      </div>
    </>
  );
}
