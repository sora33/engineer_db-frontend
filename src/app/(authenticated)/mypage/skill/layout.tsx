import { Metadata } from "next";

export const metadata: Metadata = {
  title: "スキル",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
