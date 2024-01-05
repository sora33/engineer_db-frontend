import { tv } from "tailwind-variants";

export const TextVariants = tv({
  base: "text-xs md:text-sm",
});
interface Props {
  children: React.ReactNode;
  className?: string;
}
export const Description: React.FC<Props> = ({ children, className }) => {
  return <p className={TextVariants({ className })}>{children}</p>;
};
