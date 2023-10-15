import { Inner } from "@/components/atoms/inner";
import { Logo } from "@/components/layout/header/Logo";
import { Nav } from "@/components/layout/header/nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="my-4 bg-white">
      <Inner size="lg">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Nav />
        </div>
      </Inner>
    </header>
  );
};
