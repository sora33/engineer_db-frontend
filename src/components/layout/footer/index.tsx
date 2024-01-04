import { Inner } from "@/components/atoms/inner";
import Image from "next/image";
import { Link } from "@/components/atoms";

export const FooterNavList = [
  { name: "トップページ", href: "/", isExternal: false },
  {
    name: "お問合わせ",
    href: "https://forms.gle/aeBUs6YQSRNgTaqz8",
    isExternal: true,
  },
  { name: "プライバシーポリシー", href: "/policy", isExternal: false },
  {
    name: "開発者の「X」",
    href: "https://twitter.com/koocookooc",
    isExternal: true,
  },
  { name: "開発の思い", href: "/thoughts", isExternal: false },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-orange-50 py-12">
      <Inner>
        <div className="flex md:justify-center">
          <div className="w-40">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="エンジニアDB"
                width={240}
                height={100}
                className="transition-transform hover:scale-105"
              />
            </Link>
          </div>
        </div>
        <nav className="mx-auto mt-8 max-w-[720px] text-sm font-semibold md:text-center">
          <ul className="grid grid-flow-col-dense grid-rows-3 gap-y-4 text-slate-600 md:grid-rows-3 md:gap-y-8">
            {FooterNavList.map((item) => (
              <li key={item.name}>
                <Link
                  className="text-slate-500 hover:underline"
                  href={item.href}
                  target={item.isExternal ? "_blank" : ""}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-12 text-center text-slate-600">
          <small className={`text-sm tracking-wide`}>
            Copyright &copy; 2023 engineer.DB Co.,Ltd. All Rights Reserved
          </small>
        </div>
      </Inner>
    </footer>
  );
};
