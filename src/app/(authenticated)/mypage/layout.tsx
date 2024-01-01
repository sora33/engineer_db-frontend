import { UserTabs } from "@/app/(authenticated)/mypage/_component/UserTabs";
import { Inner } from "@/components/atoms";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 pb-20">
      <UserTabs />
      <section className="mt-4">
        <Inner>{children}</Inner>
      </section>
    </div>
  );
}