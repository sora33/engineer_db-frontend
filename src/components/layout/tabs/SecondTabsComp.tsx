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

export const SecondTabsComp: React.FC<Props> = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav>
      <Inner>
        <ul className="flex gap-4 font-bold">
          {items.map((item, i) => (
            <li key={item.name} className="">
              <Link
                href={item.link}
                className={`inline-block rounded-lg border bg-white px-2 py-1 text-gray-500 hover:bg-orange-100
                  ${
                    pathname === item.link
                      ? "border-orange-300 bg-orange-100 text-orange-400"
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
  );
};
