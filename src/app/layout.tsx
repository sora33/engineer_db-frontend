import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "エンジニアDB",
    template: "%s | エンジニアDB",
  },
  description:
    "エンジニアDBは、エンジニアの情報を交換・交流できるアプリケーションです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={``}>
        {/* providerがあれば */}
        {children}
        {/* providerがあれば */}
      </body>
    </html>
  );
}
