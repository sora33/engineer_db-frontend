import { tv } from "tailwind-variants";

export const InnerVariants = tv({
  base: "mx-auto  max-w-full  px-4 md:px-8 md:container md:max-w-5xl",
  variants: {
    size: {
      lg: "md:max-w-6xl", // padding除くとmax-w:1216px FVとかデザイン重視
    },
  },
});

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "lg";
}

export const Inner: React.FC<Props> = ({ size, className, children }) => {
  return <div className={InnerVariants({ size, className })}>{children}</div>;
};
