"use client";

import { Inner } from "@/components/atoms";
import { Link } from "@/components/atoms";
import { usePathname } from "next/navigation";

type props = {
  items: {
    link: string;
    name: string;
  }[];
};

export const MainTabsComp: React.FC<props> = ({ items }) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-10 bg-white">
        <Inner size="lg">
          <ul className="flex gap-x-6 font-bold">
            {items.map((item) => (
              <li key={item.name} className="">
                <Link
                  href={item.link}
                  className={`inline-block py-1 text-gray-500 hover:text-gray-900
                  ${
                    pathname.includes(item.link)
                      ? "border-b-2 border-gray-900 text-gray-900"
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
