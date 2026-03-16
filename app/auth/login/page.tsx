import Logo from '@/components/logo';
import { DontHaveAcc } from '@/components/forms/auth/components/buttons';
import { FormLayout } from '@/components/forms/auth/components/form-layout';
import { LoginForm } from '@/components/forms/auth/login-form';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-7 px-4 auth-page">
      <Logo textClasses="text-white" />
      <FormLayout title="Welcome back">
        <LoginForm />
        <DontHaveAcc />
      </FormLayout>
    </main>
  );
}
