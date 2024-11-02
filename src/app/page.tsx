import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Loading } from "@/components/atoms";

export default async function Page() {
  // const session = await getServerSession();
  // if (session) {
  //   redirect("/engineers");
  // } else {
    redirect("/login");
  // }

  return (
    <div className="flex h-screen items-center justify-center">
      <Loading />
    </div>
  );
}
