import { Inner } from "@/components/atoms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "退会手続き",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 pb-20 pt-4">
      <section className="mt-4">
        <Inner>{children}</Inner>
      </section>
    </div>
  );
}
