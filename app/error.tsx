"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, RefreshCw, Home } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center app-bg px-4">
      <div className="glass-card rounded-xl p-8 max-w-sm w-full text-center space-y-5">
        <AlertCircle className="mx-auto h-10 w-10 text-[#e8522a]" />
        <div>
          <h1 className="text-xl font-semibold text-[#1a1612]">Something went wrong</h1>
          <p className="text-sm text-[#8a8278] mt-1">An unexpected error occurred.</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f07c1e] text-white text-sm font-medium hover:bg-[#d96a10] transition-colors"
          >
            <RefreshCw className="h-4 w-4" /> Try again
          </button>
          <Link href="/" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors">
            <Home className="h-4 w-4" /> Go home
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && (
          <p className="text-xs text-[#8a8278] break-all bg-muted rounded-lg p-3">{error.message}</p>
        )}
      </div>
    </div>
  )
}
