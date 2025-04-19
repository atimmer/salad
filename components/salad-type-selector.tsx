"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { SaladType } from "@/types/salad"

interface SaladTypeSelectorProps {
  saladTypes: SaladType[]
  onSelect: (saladType: SaladType) => void
}

export default function SaladTypeSelector({ saladTypes, onSelect }: SaladTypeSelectorProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Choose Your Salad Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {saladTypes.map((saladType) => (
          <Card key={saladType.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-green-100 rounded-t-lg">
              <CardTitle className="text-xl text-green-800">{saladType.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription className="text-gray-700 min-h-[80px]">{saladType.description}</CardDescription>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2 text-green-700">Perfect Balance:</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(saladType.perfectDistribution).map(([tag, value]) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200"
                    >
                      {tag}: {value}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => onSelect(saladType)} className="w-full bg-green-600 hover:bg-green-700">
                Select
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
