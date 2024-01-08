import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { CurrentUserProvider } from "@/app/(authenticated)/_component/UserContext";
import { Next13NProgress } from "nextjs13-progress";

export const metadata: Metadata = {
  title: {
    default: "エンジニアDB",
    template: "%s | エンジニアDB",
  },
  description:
    "「エンジニアDB」は、エンジニアがサービスに登録しているだけで、企業やエンジニアとつながる仕組みを目指しています。エンジニアデータを集約し、データを民主化することで、多くのエンジニアがつながれる環境を提供します。",
  openGraph: {
    title: {
      default: "エンジニアDB",
      template: "%s | エンジニアDB",
    },
    description:
      "「エンジニアDB」は、エンジニアがサービスに登録しているだけで、企業やエンジニアとつながる仕組みを目指しています。エンジニアデータを集約し、データを民主化することで、多くのエンジニアがつながれる環境を提供します。",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "エンジニアDB",
    images: [
      {
        url: "/img/logo_opg.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  generator: "Next.js",
  keywords: ["エンジニア", "データベース", "DX", "マッチング"],
  authors: [{ name: "平沼" }],
  creator: "ひらぬま",
  themeColor: "F97316",
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
          <CurrentUserProvider>
            <ToastProvider>
              <Header />
              <Next13NProgress color="orange" />
              <main className="">{children}</main>
              <Footer />
            </ToastProvider>
          </CurrentUserProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
