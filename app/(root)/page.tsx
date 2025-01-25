import { AsideOne } from "@/components/pages/root/components/aside-1"
import { AsideTwo } from "@/components/pages/root/components/aside-2"
import { MainSide } from "@/components/pages/root/components/main-side"
import { FollowMeSection } from "@/components/pages/profile/components/section-3/follow-me"
import { CheckIsAuth } from "@/data/check-is-auth"
import { NotloggedIn } from "@/components/cards/post-card/Notloggedin"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const { isAuthenticated } = await CheckIsAuth()

  if (!isAuthenticated) {
    return <NotloggedIn />
  }

  return (
    <main className="pt-5 flex justify-between gap-4 items-start bg-light-1 main-container flex-1">
      <div className="w-1/4 hidden laptop:block space-y-4">
        <div className="w-full shadow-md bg-white rounded-lg">
          <AsideOne />
        </div>
        <FollowMeSection classes="bg-white !w-full px-4 py-4 shadow-md rounded-lg h-fit" />
      </div>

      <div className="w-full laptop:w-1/2">
        <MainSide />
      </div>

      <div className="w-1/4 shadow-md hidden laptop:block rounded-lg overflow-hidden">
        <div className="py-2 bg-white">
          <AsideTwo />
        </div>
      </div>
    </main>
  )
}

