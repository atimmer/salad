import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Ingredient, SaladType, TagDistribution } from "@/types/salad"
import { Progress } from "@/components/ui/progress"

interface CurrentSaladProps {
  salad: Ingredient[]
  saladType: SaladType
}

export default function CurrentSalad({ salad, saladType }: CurrentSaladProps) {
  // Calculate current tag distribution as an average instead of a sum
  const getCurrentDistribution = (): TagDistribution => {
    const distribution: TagDistribution = {}
    const tagCounts: Record<string, number> = {}

    salad.forEach((ingredient) => {
      ingredient.tags.forEach((tag) => {
        if (!distribution[tag.name]) {
          distribution[tag.name] = 0
          tagCounts[tag.name] = 0
        }
        distribution[tag.name] += tag.weight
        tagCounts[tag.name]++
      })
    })

    // Calculate averages
    Object.keys(distribution).forEach((tag) => {
      distribution[tag] = Math.round((distribution[tag] / tagCounts[tag]) * 10) / 10
    })

    return distribution
  }

  const currentDistribution = getCurrentDistribution()
  const perfectDistribution = saladType.perfectDistribution

  // Calculate completion percentage for each tag
  const getCompletionPercentage = (tag: string): number => {
    const current = currentDistribution[tag] || 0
    const target = perfectDistribution[tag] || 0

    if (target === 0) return 100
    return Math.min(Math.round((current / target) * 100), 100)
  }

  // Get all unique tags from the perfect distribution
  const allTags = Object.keys(perfectDistribution)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-green-800">Your {saladType.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {salad.length === 0 ? (
          <p className="text-gray-500 italic">Start by selecting an ingredient</p>
        ) : (
          <>
            <h3 className="font-medium mb-2 text-green-700">Ingredients:</h3>
            <ul className="mb-6 space-y-1">
              {salad.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-xl">{ingredient.emoji}</span>
                  <span>{ingredient.name}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-medium mb-2 text-green-700">Balance:</h3>
            <div className="space-y-3">
              {allTags.map((tag) => (
                <div key={tag}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{tag}</span>
                    <span>
                      {(currentDistribution[tag] || 0).toFixed(1)} / {perfectDistribution[tag]}
                    </span>
                  </div>
                  <Progress
                    value={getCompletionPercentage(tag)}
                    className={`h-2 ${getCompletionPercentage(tag) >= 100 ? "bg-green-100" : "bg-gray-100"}`}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
