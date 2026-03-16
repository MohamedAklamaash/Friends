import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function UnAuthenticated() {
  return (
    <>
      <Button variant="ghost" asChild className="hidden xxs:inline-flex text-[#8a8278] hover:text-[#1a1612] text-sm">
        <Link prefetch href="/auth/login">Login</Link>
      </Button>
      <Button asChild className="text-sm rounded-lg px-4 h-9">
        <Link prefetch href="/auth/signup">Get started</Link>
      </Button>
    </>
  );
}
