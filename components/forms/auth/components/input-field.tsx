import * as React from 'react';
import clsx from 'clsx';
import { Input } from '@/components/ui/input';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Input
        className={clsx(
          '!bg-white/10 !border-white/20 !text-white placeholder:!text-white/40 focus-visible:!ring-[#f07c1e]/30 focus-visible:!border-[#f07c1e]/60 rounded-lg h-11 text-sm',
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);

InputField.displayName = 'InputField';
