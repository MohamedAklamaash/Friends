"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-6">We apologize for the inconvenience. An error has occurred.</p>
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            <Home className="mr-2 h-5 w-5" />
            Go back home
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md text-left">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Error details:</h2>
            <p className="text-xs text-gray-600 break-all">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

