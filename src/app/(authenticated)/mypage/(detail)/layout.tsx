import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
