import * as React from 'react';
import clsx from 'clsx';

interface ShowIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  keepClasses?: boolean;
  hoverEffect?: boolean;
  className?: string;
}

export function ShowIcon({
  children,
  keepClasses = true,
  hoverEffect = true,
  className,
  ...props
}: ShowIconProps) {
  return (
    <div
      className={clsx(
        keepClasses &&
          'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-amber-50 text-amber-700 rounded-full active:scale-90 duration-200 h-11 w-11 border border-amber-100',
        hoverEffect && 'hover:bg-amber-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
