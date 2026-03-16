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
import { AnimatedPostCard } from "./animated-wrapper"

export async function PostCard({ post }: { post: IPost }) {
  const { isAuthenticated, user: loggedInUser } = await CheckIsAuth()

  if (!loggedInUser) return null

  const postId = post?._id
  const userId = loggedInUser?._id

  async function handleLike() {
    "use server"
    await likePost({ postId, userId })
  }

  async function handleDislike() {
    "use server"
    await dislikePost({ postId, userId })
  }

  const isPostLiked = await checkIfUserLikedPost({ postId, userId })
  const likedUsers = await getLikedUsers(postId)
  const isLikedByCurrentUser = likedUsers.some((id: string) => id === String(loggedInUser?._id))
  const likedCount = await getLikesCount(postId)

  return (
    <AnimatedPostCard>
      <div className="p-5 space-y-3">
        <PostHeader currentUser={loggedInUser} post={post} />
        <PostContent content={post?.content} />
        {post?.image && (
          <PostImage
            imageUrl={post?.image}
            altText={post?.author?.fullName || post.author?.username}
            classes="rounded-xl overflow-hidden"
          />
        )}
        <LikeStatus
          likedCount={likedCount}
          isLikedByCurrentUser={isLikedByCurrentUser}
          userName={loggedInUser?.fullName || loggedInUser?.username}
        />
      </div>

      <div className={cn("px-5 py-3 border-t border-white/30", opensans.className)}>
        <form action={isPostLiked ? handleDislike : handleLike}>
          <LikeButton isLiked={Boolean(isPostLiked)} />
        </form>
      </div>
    </AnimatedPostCard>
  )
}
