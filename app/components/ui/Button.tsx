import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "relative overflow-hidden bg-blue-700 text-white shadow-lg rounded-lg hover:bg-white group",
        secondary:
          "bg-white text-blue-700 border-2 border-transparent rounded-lg shadow-sm hover:bg-blue-700 hover:text-white hover:border-white",
      },
      size: {
        md: "px-5 py-3 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, children, className, variant, size, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    const content =
      variant === "primary" ? (
        <>
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg" />
          <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            {children}
          </span>
        </>
      ) : (
        children
      );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
