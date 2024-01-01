import { UserTabs } from "@/app/(authenticated)/mypage/_component/UserTabs";
import { Inner } from "@/components/atoms";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 pb-20">
      <div className="pt-8">
        <UserTabs />
      </div>
      <section className="mt-4">
        <Inner>{children}</Inner>
      </section>
    </div>
  );
}
