"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Ingredient } from "@/types/salad"
import { StarIcon } from "lucide-react"

interface IngredientCardProps {
  ingredient: Ingredient
  onClick: () => void
}

export default function IngredientCard({ ingredient, onClick }: IngredientCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-all transform hover:-translate-y-1 border-2 border-green-100"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-center text-green-800">{ingredient.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center pb-2">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
          <span className="text-4xl">{ingredient.emoji}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="w-full space-y-1">
          {ingredient.tags.map((tag) => (
            <div key={tag.name} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{tag.name}</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-3 h-3 ${i < tag.weight ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
