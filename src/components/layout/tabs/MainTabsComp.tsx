"use client";

import { Inner } from "@/components/atoms";
import { Link } from "@/components/atoms";
import { usePathname } from "next/navigation";

type Props = {
  items: {
    link: string;
    name: string;
  }[];
};

export const MainTabsComp: React.FC<Props> = ({ items }) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-white py-1">
        <Inner size="lg">
          <ul className="flex gap-x-6 font-bold">
            {items.map((item) => (
              <li key={item.name} className="">
                <Link
                  href={item.link}
                  className={`inline-block pb-1 pt-2 text-slate-500 hover:text-slate-900
                  ${
                    pathname && pathname.includes(item.link)
                      ? "border-b-2 border-orange-500 text-slate-900"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Inner>
      </nav>
    </>
  );
};
