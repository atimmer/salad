"use client"

import { useState } from "react"
import { saladTypes } from "@/data/salad-types"
import { ingredients } from "@/data/ingredients"
import SaladTypeSelector from "@/components/salad-type-selector"
import IngredientCard from "@/components/ingredient-card"
import CurrentSalad from "@/components/current-salad"
import type { SaladType, Ingredient, TagDistribution } from "@/types/salad"

export default function SaladGenerator() {
  const [selectedSaladType, setSelectedSaladType] = useState<SaladType | null>(null)
  const [currentSalad, setCurrentSalad] = useState<Ingredient[]>([])
  const [availableIngredients, setAvailableIngredients] = useState<Ingredient[]>([])

  // Initialize the game with base ingredients when a salad type is selected
  const selectSaladType = (saladType: SaladType) => {
    setSelectedSaladType(saladType)
    setCurrentSalad([])

    // Get initial base ingredients
    const baseIngredients = ingredients
      .filter((ingredient) => ingredient.tags.some((tag) => tag.name === "Salad Base"))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)

    setAvailableIngredients(baseIngredients)
  }

  // Add an ingredient to the current salad and generate new suggestions
  const selectIngredient = (ingredient: Ingredient) => {
    const updatedSalad = [...currentSalad, ingredient]
    setCurrentSalad(updatedSalad)

    // Generate new suggested ingredients
    const suggestedIngredients = getSuggestedIngredients(updatedSalad, selectedSaladType!)
    setAvailableIngredients(suggestedIngredients)
  }

  // Calculate the current salad's tag distribution as an average
  const getCurrentDistribution = (salad: Ingredient[]): TagDistribution => {
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

  // Get suggested ingredients based on the difference between current and perfect distribution
  const getSuggestedIngredients = (salad: Ingredient[], saladType: SaladType): Ingredient[] => {
    const currentDistribution = getCurrentDistribution(salad)
    const perfectDistribution = saladType.perfectDistribution

    // Check if "Bite" tag is missing or low
    const hasSufficientBite = (currentDistribution["Bite"] || 0) >= 3

    // Calculate difference scores for each ingredient
    const ingredientScores = ingredients
      .filter((ingredient) => !salad.some((i) => i.id === ingredient.id)) // Filter out already selected ingredients
      .map((ingredient) => {
        let score = 0

        // If "Bite" is missing and this ingredient has it, give it a boost
        if (!hasSufficientBite && ingredient.tags.some((tag) => tag.name === "Bite")) {
          score += 10
        }

        // Calculate how well this ingredient helps reach the perfect distribution
        ingredient.tags.forEach((tag) => {
          const current = currentDistribution[tag.name] || 0
          const perfect = perfectDistribution[tag.name] || 0

          if (current < perfect) {
            // If we need more of this tag, increase score
            score += (perfect - current) * tag.weight
          } else {
            // If we already have enough, slightly penalize
            score -= (current - perfect) * 0.5
          }
        })

        return { ingredient, score }
      })

    // Sort by score and take top 3
    return ingredientScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.ingredient)
  }

  return (
    <div className="space-y-8">
      {!selectedSaladType ? (
        <SaladTypeSelector saladTypes={saladTypes} onSelect={selectSaladType} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Building: {selectedSaladType.name}</h2>
              <p className="text-gray-600 mb-4">{selectedSaladType.description}</p>
              <button
                onClick={() => setSelectedSaladType(null)}
                className="text-sm text-green-600 hover:text-green-800 underline"
              >
                Choose a different salad type
              </button>
            </div>

            <h3 className="text-lg font-medium mb-3 text-green-700">Choose your next ingredient:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {availableIngredients.map((ingredient) => (
                <IngredientCard
                  key={ingredient.id}
                  ingredient={ingredient}
                  onClick={() => selectIngredient(ingredient)}
                />
              ))}
            </div>
          </div>

          <div>
            <CurrentSalad salad={currentSalad} saladType={selectedSaladType} />
          </div>
        </div>
      )}
    </div>
  )
}
