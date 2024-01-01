import { Inner } from "@/components/atoms";

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