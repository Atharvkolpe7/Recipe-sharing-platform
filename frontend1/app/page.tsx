import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const featuredRecipes = [
    {
      id: 1,
      title: "Homemade Pizza",
      image: "/placeholder.svg?height=400&width=600",
      time: "45 mins",
      servings: 4,
      chef: "John Doe",
    },
    {
      id: 2,
      title: "Chocolate Cake",
      image: "/placeholder.svg?height=400&width=600",
      time: "60 mins",
      servings: 8,
      chef: "Jane Smith",
    },
    {
      id: 3,
      title: "Garden Salad",
      image: "/placeholder.svg?height=400&width=600",
      time: "15 mins",
      servings: 2,
      chef: "Mike Johnson",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">Share Your Culinary Creations</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of food lovers and share your favorite recipes with the world. Discover new dishes and
          cooking techniques from passionate home chefs.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/recipes">
            <Button className="bg-orange-600 hover:bg-orange-700">Browse Recipes</Button>
          </Link>
          <Link href="/recipes/new">
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100">
              Share Recipe
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 text-orange-600">
                  <ChefHat className="w-4 h-4" />
                  <span>{recipe.chef}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center bg-orange-100 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Share Your Recipes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Join a community of passionate food lovers and share your culinary journey
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Inspire</h3>
              <p className="text-gray-600">Help others discover new flavors and cooking techniques</p>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p className="text-gray-600">Discover new recipes and improve your cooking skills</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

