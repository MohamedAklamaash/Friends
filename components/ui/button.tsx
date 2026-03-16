import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#f07c1e] text-white hover:bg-[#d96a10] shadow-sm',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-[#f07c1e]/30 bg-transparent text-[#f07c1e] hover:bg-amber-50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-amber-50 hover:text-[#f07c1e]',
        link: 'text-[#f07c1e] underline-offset-4 hover:underline',
        icon: 'bg-amber-50 text-amber-700 hover:bg-amber-100 rounded-full active:scale-90 border border-amber-100',
        placeholder: 'text-start text-sm justify-start border border-[#f07c1e]/20 bg-white hover:bg-amber-50 hover:text-[#f07c1e] rounded-full px-5 py-8 w-full border-2 text-base grow text-muted-foreground',
        auth: 'w-full py-3 mt-2 text-sm font-semibold rounded-lg bg-[#f07c1e] text-white hover:bg-[#d96a10] transition-all duration-200 shadow-md shadow-amber-200/50 tracking-wide uppercase',
        editCover: '!py-1.5 xs:!px-4 !px-2 !h-fit bg-white text-[#1a1612] hover:bg-amber-50 border border-amber-100',
        noVariant: '',
        threeDots: 'rounded-full hover:bg-amber-50 text-[#8a8278]',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-11 w-11',
        xs: 'h-9 w-9 !p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
