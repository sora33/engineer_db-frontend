import { Inner } from "@/components/atoms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Inner>{children}</Inner>;
}
