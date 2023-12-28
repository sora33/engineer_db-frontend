import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { ToastProvider } from "@/providers/ToastProvider";

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
        <NextAuthProvider>
          <ToastProvider>
            <Header />
            <main className="">{children}</main>
            <Footer />
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
