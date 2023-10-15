import Link from "next/link";
import { LinkProps } from "next/link";
import { tv } from "tailwind-variants";

export const LinkTextVariants = tv({
  base: "hover:underline",
});

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const LinkText: React.FC<Props> = ({
  children,
  className,
  ...Props
}) => {
  return (
    <Link className={LinkTextVariants({ className })} {...Props}>
      {children}
    </Link>
  );
};
