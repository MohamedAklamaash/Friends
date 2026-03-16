import { getAllPosts } from '@/actions/posts';
import { CreatePost } from '@/components/forms/create-post';
import { CheckIsAuth } from '@/data/check-is-auth';
import { PostCard } from '@/components/cards/post-card';

export async function MainSide() {
  const { posts } = await getAllPosts();
  const { isAuthenticated } = await CheckIsAuth();

  return (
    <main className="max-w-[700px] mx-auto mb-20">
      {isAuthenticated && <CreatePost />}

      {(!posts || !posts.length) && (
        <div className="my-10 flex justify-center items-center">
          <span className="text-muted-foreground italic text-sm">No posts yet — be the first to share!</span>
        </div>
      )}

      {posts && posts.length > 0 && (
        <section className="flex flex-col gap-4 mt-4">
          {posts.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </section>
      )}
    </main>
  );
}
