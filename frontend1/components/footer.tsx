import { ChefHat } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">RecipeShare</span>
          </div>
          <nav className="flex gap-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RecipeShare. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

