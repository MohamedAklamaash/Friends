import { Metadata } from 'next';

import { getUsers } from '@/actions/users';
import { cn } from '@/lib/utils';

import { opensans, roboto } from '@/components/fonts';
import { UserBlock } from '@/components/pages/suggested/components/user-block';

export const metadata: Metadata = {
  title: 'Suggested People',
};

export default async function SuggestedPage() {
  const { users } = await getUsers();

  return (
    <main className="app-bg main-container flex-1 py-6">
      <div className={cn('space-y-1 mt-2', roboto.className)}>
        <h1 className="text-2xl font-bold brand-gradient-text">Suggested People</h1>
        <p className="text-sm text-muted-foreground">Follow people to see their updates</p>
      </div>

      <div className="mt-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {users?.map((user, i) => (
            <UserBlock key={i} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
}
