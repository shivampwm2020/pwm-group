import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';
import { components } from '@/app/styles/design-system';

const sectionVariants = cva(
  'relative',
  {
    variants: {
      variant: {
        default: 'bg-white',
        primary: 'bg-gradient-to-r from-blue-600 to-indigo-700',
        secondary: 'bg-gray-50',
        accent: 'bg-blue-50',
      },
      padding: {
        none: '',
        sm: 'py-12',
        md: 'py-16',
        lg: 'py-24',
      },
      container: {
        true: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      },
      overflow: {
        true: 'overflow-hidden',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'lg',
      container: false,
      overflow: false,
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, padding, container, overflow, as: Component = 'section', ...props }, ref) => {
    return (
      <Component
        className={cn(sectionVariants({ variant, padding, container, overflow, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';

const SectionContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10', className)}
      {...props}
    />
  );
});

SectionContainer.displayName = 'SectionContainer';

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('text-center mb-16', className)}
      {...props}
    />
  );
});

SectionHeader.displayName = 'SectionHeader';

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn('text-3xl font-bold text-gray-900 mb-4', className)}
      {...props}
    />
  );
});

SectionTitle.displayName = 'SectionTitle';

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-xl text-gray-600 max-w-3xl mx-auto', className)}
      {...props}
    />
  );
});

SectionDescription.displayName = 'SectionDescription';

const SectionBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4', className)}
      {...props}
    />
  );
});

SectionBadge.displayName = 'SectionBadge';

export { Section, SectionContainer, SectionHeader, SectionTitle, SectionDescription, SectionBadge }; 