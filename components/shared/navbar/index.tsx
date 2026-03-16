import { CheckIsAuth } from '@/data/check-is-auth';
import Logo from '@/components/logo';
import { Authenticated } from './authenticated';
import { UnAuthenticated } from './unAuthenticated';

export async function NavBar() {
  const { isAuthenticated, user } = await CheckIsAuth();

  return (
    <nav className="flex-between py-3 glass-nav main-container sticky top-0 z-50">
      <Logo />
      <div className="flex items-center gap-3">
        {!isAuthenticated && <UnAuthenticated />}
        {isAuthenticated && <Authenticated user={user} />}
      </div>
    </nav>
  );
}
