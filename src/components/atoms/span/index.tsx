import { tv } from "tailwind-variants";

export const SpanVariants = tv({
  base: "text-orange-500 font-bold",
});

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Span: React.FC<Props> = ({ children, className, ...Props }) => {
  return (
    <span className={SpanVariants({ className })} {...Props}>
      {children}
    </span>
  );
};
