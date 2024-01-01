import { Inner } from "@/components/atoms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "エンジニア一覧",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 pb-20 pt-4">
      <section className="mt-4">
        <Inner size="xl">{children}</Inner>
      </section>
    </div>
  );
}
