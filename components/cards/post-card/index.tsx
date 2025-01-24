import {
  checkIfUserLikedPost,
  dislikePost,
  getLikedUsers,
  likePost,
  getLikesCount,
} from '@/actions/posts';
import { IPost } from '@/models/postModel';
import { cn } from '@/lib/utils';
import { CheckIsAuth } from '@/data/check-is-auth';

import { opensans } from '@/components/fonts';

import { PostHeader } from './post-header';
import { PostContent } from './post-content';
import { PostImage } from './post-image';
import { LikeButton } from './like-button';
import { LikeStatus } from './like-status';
import { ObjectId } from 'mongoose';

export async function PostCard({ post }: { post: IPost }) {
  const { isAuthenticated, user: loggedInUser } = await CheckIsAuth();

  // Type guard for loggedInUser
  if (!loggedInUser) {
    console.error('User is not logged in');
    return (
      <div className="my-2 mx-2 rounded-md hover:bg-slate-100/80 transition duration-100">
        <div className="flex-center gap-1 w-full mx-auto text-gray-500 px-4 py-1.5">
          <span className="text-sm font-bold text-destructive">
            Log in to like posts
          </span>
        </div>
      </div>
    );
  }

  // Type assertions for ObjectId or compatible types
  const postId = post?._id as ObjectId;
  const userId = loggedInUser?._id as ObjectId;

  async function handleLike() {
    'use server';
    await likePost({ postId, userId });
  }

  async function handleDislike() {
    'use server';
    await dislikePost({ postId, userId });
  }

  // Check if the post is liked by the current user
  const isPostLiked = await checkIfUserLikedPost({
    postId,
    userId,
  });

  // Fetch liked users and check for the current user
  const likedUsers = (await getLikedUsers(postId));
  const isLikedByCurrentUser = likedUsers.some((userId: string) =>
    userId === loggedInUser?._id
  );


  // Fetch likes count
  const likedCount = await getLikesCount(postId);

  return (
    <div className="bg-white shadow-md rounded-lg pt-3">
      <div className="pb-1.5 border-border border-b">
        <PostHeader currentUser={loggedInUser} post={post} />
        <PostContent content={post?.content} />
        {post?.image && (
          <PostImage
            imageUrl={post?.image}
            altText={post?.author?.fullName || post.author?.username}
          />
        )}

        <LikeStatus
          likedCount={likedCount}
          isLikedByCurrentUser={isLikedByCurrentUser}
          userName={loggedInUser?.fullName || loggedInUser?.username}
        />
      </div>

      {isAuthenticated && (
        <div
          className={cn(
            'my-2 mx-2 rounded-md hover:bg-slate-100/80 transition duration-100',
            opensans.className
          )}
        >
          <form action={isPostLiked ? handleDislike : handleLike}>
            <LikeButton isLiked={Boolean(isPostLiked)} />
          </form>
        </div>
      )}
    </div>
  );
}
