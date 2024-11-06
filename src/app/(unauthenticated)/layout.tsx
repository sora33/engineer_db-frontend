import { MainTabs } from "@/app/(authenticated)/_component/MainTabs";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect("/sorry");
  // const session = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }
}
