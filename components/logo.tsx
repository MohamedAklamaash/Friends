import Link from 'next/link';
import { cn } from '@/lib/utils';
import { poppins } from './fonts';

interface LogoProps {
  textClasses?: string;
}

export default function Logo({ textClasses }: LogoProps) {
  return (
    <Link href="/">
      <div className={cn('logo flex items-center gap-2.5', poppins.className)}>
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="16" cy="16" r="15" fill="#1a1612" />
          <path d="M16 6C16 6 20.5 11 20.5 15C20.5 17.2 19.3 18.8 17.5 19.8C18.2 18 17.5 16.2 16.3 15C16.5 17.2 15.3 19 13.5 20.2C14.2 18.5 13.5 16.8 12.3 15.8C11.2 17.2 11 19 12 20.5C10.2 19.3 9.5 17 9.5 14.5C9.5 10.5 12.5 7.5 16 6Z" fill="#f07c1e"/>
          <path d="M16 18.5C16 18.5 18.2 20 18.2 22.2C18.2 24.2 17 25.8 15.2 26.2C15.8 24.5 15.2 22.8 14 21.8C14 23.5 12.8 25 11.8 25.5C12.5 23.8 11.8 22 13 20.5C13.8 19.5 15 18.8 16 18.5Z" fill="#e8522a"/>
        </svg>
        <h1 className={cn('text-[21px] font-semibold tracking-tight text-[#1a1612]', textClasses)}>
          Friends
        </h1>
      </div>
    </Link>
  );
}
