import Logo from '@/components/logo';

import { AlreadyHaveAcc } from '@/components/forms/auth/components/buttons';
import { FormLayout } from '@/components/forms/auth/components/form-layout';
import { SignUpForm } from '@/components/forms/auth/signup-form';

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-7 px-4 auth-page">
      <Logo textClasses="text-white" />
      <FormLayout title="Create account">
        <SignUpForm />
        <AlreadyHaveAcc />
      </FormLayout>
    </main>
  );
}
