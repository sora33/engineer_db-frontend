import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { CurrentUserProvider } from "@/app/(authenticated)/_component/UserContext";

export const metadata: Metadata = {
  title: {
    default: "エンジニアDB",
    template: "%s | エンジニアDB",
  },
  description:
    "「エンジニアDB」は、エンジニアがサービスに登録しているだけで、企業やエンジニアとつながる仕組みを目指しています。エンジニアデータを集約し、データを民主化することで、多くのエンジニアがつながれる環境を提供します。",
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
              <main className="">{children}</main>
              <Footer />
            </ToastProvider>
          </CurrentUserProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
