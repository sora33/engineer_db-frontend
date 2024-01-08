"use client";

import NextLink, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { linkClicked as progressBarLinkClicked } from "nextjs13-progress";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

export const LinkVariants = tv({
  base: "",
});

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}
export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ onClick, className, children, ...rest }, ref) => (
    <NextLink
      className={LinkVariants({ className })}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        } else {
          progressBarLinkClicked(event);
        }
      }}
      {...rest}
      ref={ref}
    >
      {children}
    </NextLink>
  )
);

Link.displayName = "Link";
