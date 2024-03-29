"use client";

import NextLink, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { linkClicked as progressBarLinkClicked } from "nextjs13-progress";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

export const LinkTextVariants = tv({
  base: "",
});

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}
export const LinkText = forwardRef<HTMLAnchorElement, Props>(
  ({ onClick, className, children, ...rest }, ref) => (
    <NextLink
      className={LinkTextVariants({ className })}
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

LinkText.displayName = "Link";
