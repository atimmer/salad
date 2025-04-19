export interface Tag {
  name: string
  weight: number // 1-5 star rating
}

export interface Ingredient {
  id: string
  name: string
  emoji: string // Using emoji for visual representation
  tags: Tag[]
}

export type TagDistribution = {
  [key: string]: number
}

export interface SaladType {
  id: string
  name: string
  description: string
  perfectDistribution: TagDistribution
}
