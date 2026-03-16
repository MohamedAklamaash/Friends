import clsx from 'clsx';
import Link from 'next/link';

export function ForgotPasswordBtn() {
  return (
    <span className="block text-white/40 text-end">
      <Link href="/auth/forgot-password" className="text-xs hover:text-[#f07c1e] transition-colors">
        Forgot password?
      </Link>
    </span>
  );
}

export function DontHaveAcc() {
  return (
    <span className="block mt-6 text-xs text-center text-white/40">
      Don&apos;t have an account?{' '}
      <Link href="/auth/signup" className="text-[#f07c1e] hover:text-[#e8522a] font-medium transition-colors">
        Sign up
      </Link>
    </span>
  );
}

export function AlreadyHaveAcc({ className }: { className?: string }) {
  return (
    <span className={clsx('block mt-6 text-xs text-center text-white/40', className)}>
      Already have an account?{' '}
      <Link href="/auth/login" className="text-[#f07c1e] hover:text-[#e8522a] font-medium transition-colors">
        Login
      </Link>
    </span>
  );
}
