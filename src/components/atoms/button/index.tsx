import { tv } from "tailwind-variants";
import Link from "next/link";

export const ButtonVariants = tv({
  base: `bg-primary text-white px-4 py-3 rounded-full
        shadow-[0_5px_0_#0A6D78] inline-block md:text-lg
        hover:-translate-y-1 transition-transform
        active:translate-y-0 active:shadow-none`,
  variants: {
    size: {
      base: "w-full max-w-[220px] md:max-w-[280px]",
      sm: "",
    },
  },
});

interface Props {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "base";
  href?: string;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  size = "base",
  href = "",
}) => {
  return href ? (
    <Link href={href} className={ButtonVariants({ size, className })}>
      {children}
    </Link>
  ) : (
    <button className={ButtonVariants({ size, className })}>{children}</button>
  );
};
