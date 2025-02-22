import { Button } from "@/components/ui/button"
import { ChefHat } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">RecipeShare</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/recipes" className="text-gray-600 hover:text-gray-900">
              Browse
            </Link>
            <Link href="/recipes/new">
              <Button className="bg-orange-600 hover:bg-orange-700">Share Recipe</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

