import { tv } from "tailwind-variants";
import { TextVariants } from "@/components/atoms/text";
import { TextProps } from "@/components/atoms/text";

const HeadingVariants = tv({
  extend: TextVariants,
  base: "font-bold",
});

interface Props extends TextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: React.FC<Props> = ({
  as,
  size = "base",
  leading = "md",
  tracking = "md",
  children,
  className,
}) => {
  const Tag = as;
  return (
    <Tag className={HeadingVariants({ size, leading, tracking, className })}>
      {children}
    </Tag>
  );
};
