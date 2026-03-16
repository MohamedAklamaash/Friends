import Link from "next/link"
import { Home } from "lucide-react"
import { poppins } from "@/components/fonts"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center app-bg px-4">
      <div className="glass-card rounded-xl p-10 max-w-sm w-full text-center space-y-5">
        <h1 className={cn("text-7xl font-semibold brand-gradient-text", poppins.className)}>404</h1>
        <div>
          <h2 className="text-lg font-semibold text-[#1a1612]">Page not found</h2>
          <p className="text-sm text-[#8a8278] mt-1">The page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#f07c1e] text-white text-sm font-medium hover:bg-[#d96a10] transition-colors">
          <Home className="h-4 w-4" />
          Go home
        </Link>
      </div>
    </div>
  )
}
