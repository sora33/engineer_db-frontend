import { tv } from "tailwind-variants";

export const TextVariants = tv({
  base: "",
  variants: {
    size: {
      xs: "text-sm md:text-sm",
      sm: "text-base md:text-base",
      base: "md:text-xl",
      md: "text-xl md:text-2xl",
      lg: "text-2xl md:text-3xl",
      xl: "text-2xl md:text-4xl",
    },
    tracking: {
      sm: "tracking-normal",
      md: "tracking-whide",
      lg: "tracking-whidest",
      xl: "tracking-[0.15em]",
    },
    leading: {
      sm: "leading-tight md:leading-tight",
      md: "leading-normal md:leading-normal",
      lg: "leading-normal md:leading-relaxed",
      xl: "leading-normal md:leading-loose",
    },
  },
});

export interface TextProps {
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  tracking?: "sm" | "md" | "lg" | "xl";
  leading?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
}
export const Text: React.FC<TextProps> = ({
  size = "base",
  tracking = "md",
  leading = "md",
  children,
  className,
}) => {
  return (
    <p className={TextVariants({ size, tracking, leading, className })}>
      {children}
    </p>
  );
};
