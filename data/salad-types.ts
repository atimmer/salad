import type { SaladType } from "@/types/salad"

export const saladTypes: SaladType[] = [
  {
    id: "leafy-mess",
    name: "The Leafy Mess",
    description: "A verdant explosion of leafy greens with just enough bite and protein to keep you satisfied.",
    perfectDistribution: {
      Bite: 3,
      "Leafy Greens": 5,
      Protein: 2,
      Crunch: 2,
      Zest: 1,
    },
  },
  {
    id: "protein-boost",
    name: "The Protein Boost",
    description: "A protein-packed powerhouse that will fuel your day with energy and satisfaction.",
    perfectDistribution: {
      Bite: 4,
      "Leafy Greens": 2,
      Protein: 5,
      Grain: 2,
      Crunch: 1,
    },
  },
  {
    id: "rainbow-delight",
    name: "The Rainbow Delight",
    description: "A colorful medley of vegetables that's as nutritious as it is visually stunning.",
    perfectDistribution: {
      Bite: 3,
      "Leafy Greens": 3,
      Colorful: 5,
      Sweet: 2,
      Zest: 2,
    },
  },
  {
    id: "mediterranean-dream",
    name: "The Mediterranean Dream",
    description: "Transport yourself to the Mediterranean coast with this olive oil-kissed creation.",
    perfectDistribution: {
      Bite: 3,
      "Leafy Greens": 2,
      Zest: 3,
      Savory: 4,
      Herb: 3,
    },
  },
  {
    id: "asian-fusion",
    name: "The Asian Fusion",
    description: "A perfect balance of sweet, sour, and umami flavors with an Eastern twist.",
    perfectDistribution: {
      Bite: 3,
      Crunch: 4,
      Sweet: 2,
      Umami: 4,
      Spicy: 2,
    },
  },
  {
    id: "hearty-harvest",
    name: "The Hearty Harvest",
    description: "A robust, filling salad featuring seasonal vegetables and hearty grains.",
    perfectDistribution: {
      Bite: 4,
      Grain: 4,
      Root: 3,
      Savory: 3,
      "Leafy Greens": 1,
    },
  },
]
