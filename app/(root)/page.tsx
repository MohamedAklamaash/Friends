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
    <main className="pt-6 flex justify-between gap-5 items-start main-container flex-1 pb-10">
      <div className="w-1/4 hidden laptop:block space-y-4">
        <div className="w-full glass-card rounded-2xl overflow-hidden">
          <AsideOne />
        </div>
        <FollowMeSection classes="glass-card !w-full px-4 py-4 rounded-2xl h-fit" />
      </div>

      <div className="w-full laptop:w-1/2">
        <MainSide />
      </div>

      <div className="w-1/4 hidden laptop:block rounded-2xl overflow-hidden">
        <div className="glass-card rounded-2xl py-2">
          <AsideTwo />
        </div>
      </div>
    </main>
  )
}
