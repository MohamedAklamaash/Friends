import { checkIfUserLikedPost, dislikePost, getLikedUsers, likePost, getLikesCount } from "@/actions/posts"
import type { IPost } from "@/models/postModel"
import { cn } from "@/lib/utils"
import { CheckIsAuth } from "@/data/check-is-auth"

import { opensans } from "@/components/fonts"

import { PostHeader } from "./post-header"
import { PostContent } from "./post-content"
import { PostImage } from "./post-image"
import { LikeButton } from "./like-button"
import { LikeStatus } from "./like-status"
import type { ObjectId } from "mongoose"

export async function PostCard({ post }: { post: IPost }) {
  const { isAuthenticated, user: loggedInUser } = await CheckIsAuth()

  if (!loggedInUser) {
    console.error("User is not logged in")
    return (
      <div className="my-4 mx-2 rounded-lg bg-gradient-to-r from-red-100 to-red-200 p-4 shadow-md transition duration-300 hover:shadow-lg">
        <div className="flex-center w-full gap-2 text-red-600">
          <a href="/auth/login" className="text-sm font-bold">Log in to like posts</a>
        </div>
      </div>
    )
  }

  // Type assertions for ObjectId or compatible types
  const postId = post?._id as ObjectId
  const userId = loggedInUser?._id as ObjectId

  async function handleLike() {
    "use server"
    await likePost({ postId, userId })
  }

  async function handleDislike() {
    "use server"
    await dislikePost({ postId, userId })
  }

  // Check if the post is liked by the current user
  const isPostLiked = await checkIfUserLikedPost({
    postId,
    userId,
  })

  // Fetch liked users and check for the current user
  const likedUsers = await getLikedUsers(postId)
  const isLikedByCurrentUser = likedUsers.some((userId: string) => userId === loggedInUser?._id)

  // Fetch likes count
  const likedCount = await getLikesCount(postId)

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden transform hover:-translate-y-1">
      <div className="p-6 space-y-4">
        <PostHeader currentUser={loggedInUser} post={post} />
        <PostContent content={post?.content} />
        {post?.image && <PostImage imageUrl={post?.image} altText={post?.author?.fullName || post.author?.username} />}

        <LikeStatus
          likedCount={likedCount}
          isLikedByCurrentUser={isLikedByCurrentUser}
          userName={loggedInUser?.fullName || loggedInUser?.username}
        />
      </div>

      <div
        className={cn(
          "px-6 py-4 bg-gradient-to-r from-purple-100 to-pink-100 transition-all duration-300",
          opensans.className,
        )}
      >
        <form action={isPostLiked ? handleDislike : handleLike}>
          <LikeButton isLiked={Boolean(isPostLiked)} />
        </form>
      </div>
    </div>
  )
}
