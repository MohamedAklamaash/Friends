import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Page not found</h2>
          <p className="mt-4 text-base text-gray-500">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button asChild variant="default">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go back home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Search className="mr-2 h-4 w-4" />
              Search site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

