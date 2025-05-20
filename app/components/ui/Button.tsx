import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';
import { components } from '@/app/styles/design-system';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg',
        secondary: 'bg-white text-blue-600 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300',
        tertiary: 'bg-transparent text-gray-700 hover:text-blue-600',
        ghost: 'hover:bg-gray-100 text-gray-700',
        link: 'text-blue-600 hover:underline p-0 h-auto',
      },
      size: {
        xs: 'px-2.5 py-1.5 text-xs rounded',
        sm: 'px-3 py-2 text-sm rounded-md',
        md: 'px-4 py-2.5 text-base rounded-lg',
        lg: 'px-6 py-3 text-lg rounded-lg',
        xl: 'px-8 py-4 text-xl rounded-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 