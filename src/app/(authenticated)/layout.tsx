import { MainTabs } from "@/app/(authenticated)/_component/MainTabs";
import { LocalStorage } from "@/app/(authenticated)/_component/LocalStorage";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LocalStorage />
      <MainTabs />
      <div>{children}</div>
    </>
  );
}
