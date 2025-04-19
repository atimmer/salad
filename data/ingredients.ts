import type { Ingredient } from "@/types/salad"

export const ingredients: Ingredient[] = [
  // Salad Bases
  {
    id: "romaine",
    name: "Romaine Lettuce",
    emoji: "🥬",
    tags: [
      { name: "Salad Base", weight: 5 },
      { name: "Leafy Greens", weight: 4 },
      { name: "Crunch", weight: 3 },
      { name: "Bite", weight: 2 },
    ],
  },
  {
    id: "spinach",
    name: "Baby Spinach",
    emoji: "🍃",
    tags: [
      { name: "Salad Base", weight: 5 },
      { name: "Leafy Greens", weight: 5 },
      { name: "Bite", weight: 1 },
    ],
  },
  {
    id: "kale",
    name: "Kale",
    emoji: "🥬",
    tags: [
      { name: "Salad Base", weight: 4 },
      { name: "Leafy Greens", weight: 5 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "arugula",
    name: "Arugula",
    emoji: "🌿",
    tags: [
      { name: "Salad Base", weight: 4 },
      { name: "Leafy Greens", weight: 4 },
      { name: "Zest", weight: 3 },
      { name: "Bite", weight: 2 },
    ],
  },
  {
    id: "mixed-greens",
    name: "Mixed Greens",
    emoji: "🥗",
    tags: [
      { name: "Salad Base", weight: 5 },
      { name: "Leafy Greens", weight: 4 },
      { name: "Bite", weight: 2 },
    ],
  },

  // Proteins (vegetarian only)
  {
    id: "tofu",
    name: "Crispy Tofu",
    emoji: "🧊",
    tags: [
      { name: "Protein", weight: 4 },
      { name: "Crunch", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "chickpeas",
    name: "Roasted Chickpeas",
    emoji: "🫘",
    tags: [
      { name: "Protein", weight: 3 },
      { name: "Crunch", weight: 4 },
      { name: "Bite", weight: 3 },
    ],
  },
  // Additional vegetarian protein options
  {
    id: "tempeh",
    name: "Marinated Tempeh",
    emoji: "🧱",
    tags: [
      { name: "Protein", weight: 5 },
      { name: "Savory", weight: 4 },
      { name: "Bite", weight: 4 },
    ],
  },
  {
    id: "lentils",
    name: "Spiced Lentils",
    emoji: "🫘",
    tags: [
      { name: "Protein", weight: 4 },
      { name: "Savory", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "black-beans",
    name: "Black Beans",
    emoji: "⚫",
    tags: [
      { name: "Protein", weight: 4 },
      { name: "Savory", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "seitan",
    name: "Grilled Seitan",
    emoji: "🍖",
    tags: [
      { name: "Protein", weight: 5 },
      { name: "Savory", weight: 4 },
      { name: "Bite", weight: 4 },
    ],
  },

  // Grains
  {
    id: "quinoa",
    name: "Quinoa",
    emoji: "🌾",
    tags: [
      { name: "Grain", weight: 4 },
      { name: "Protein", weight: 2 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "farro",
    name: "Farro",
    emoji: "🌾",
    tags: [
      { name: "Grain", weight: 5 },
      { name: "Bite", weight: 4 },
    ],
  },
  {
    id: "brown-rice",
    name: "Brown Rice",
    emoji: "🍚",
    tags: [
      { name: "Grain", weight: 4 },
      { name: "Bite", weight: 3 },
    ],
  },

  // Vegetables
  {
    id: "cucumber",
    name: "Cucumber",
    emoji: "🥒",
    tags: [
      { name: "Crunch", weight: 4 },
      { name: "Colorful", weight: 2 },
      { name: "Bite", weight: 2 },
    ],
  },
  {
    id: "tomato",
    name: "Cherry Tomatoes",
    emoji: "🍅",
    tags: [
      { name: "Colorful", weight: 4 },
      { name: "Sweet", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "bell-pepper",
    name: "Bell Pepper",
    emoji: "🫑",
    tags: [
      { name: "Crunch", weight: 4 },
      { name: "Colorful", weight: 5 },
      { name: "Sweet", weight: 2 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "carrot",
    name: "Shredded Carrot",
    emoji: "🥕",
    tags: [
      { name: "Crunch", weight: 3 },
      { name: "Colorful", weight: 4 },
      { name: "Sweet", weight: 2 },
      { name: "Root", weight: 4 },
      { name: "Bite", weight: 2 },
    ],
  },
  {
    id: "red-onion",
    name: "Red Onion",
    emoji: "🧅",
    tags: [
      { name: "Zest", weight: 4 },
      { name: "Colorful", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "avocado",
    name: "Avocado",
    emoji: "🥑",
    tags: [
      { name: "Savory", weight: 4 },
      { name: "Bite", weight: 4 },
    ],
  },
  {
    id: "beet",
    name: "Roasted Beet",
    emoji: "🫐",
    tags: [
      { name: "Sweet", weight: 3 },
      { name: "Colorful", weight: 5 },
      { name: "Root", weight: 5 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "corn",
    name: "Sweet Corn",
    emoji: "🌽",
    tags: [
      { name: "Sweet", weight: 4 },
      { name: "Colorful", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },

  // Herbs & Aromatics
  {
    id: "basil",
    name: "Fresh Basil",
    emoji: "🌿",
    tags: [
      { name: "Herb", weight: 5 },
      { name: "Zest", weight: 3 },
    ],
  },
  {
    id: "cilantro",
    name: "Cilantro",
    emoji: "🌿",
    tags: [
      { name: "Herb", weight: 5 },
      { name: "Zest", weight: 4 },
    ],
  },
  {
    id: "mint",
    name: "Fresh Mint",
    emoji: "🌿",
    tags: [
      { name: "Herb", weight: 5 },
      { name: "Zest", weight: 3 },
    ],
  },
  {
    id: "garlic",
    name: "Roasted Garlic",
    emoji: "🧄",
    tags: [
      { name: "Savory", weight: 5 },
      { name: "Umami", weight: 4 },
    ],
  },

  // Toppings
  {
    id: "walnuts",
    name: "Toasted Walnuts",
    emoji: "🌰",
    tags: [
      { name: "Crunch", weight: 5 },
      { name: "Savory", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "almonds",
    name: "Sliced Almonds",
    emoji: "🥜",
    tags: [
      { name: "Crunch", weight: 5 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "sunflower-seeds",
    name: "Sunflower Seeds",
    emoji: "🌻",
    tags: [
      { name: "Crunch", weight: 4 },
      { name: "Bite", weight: 2 },
    ],
  },
  {
    id: "feta",
    name: "Feta Cheese",
    emoji: "🧀",
    tags: [
      { name: "Savory", weight: 4 },
      { name: "Zest", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "parmesan",
    name: "Parmesan Cheese",
    emoji: "🧀",
    tags: [
      { name: "Savory", weight: 5 },
      { name: "Umami", weight: 4 },
      { name: "Bite", weight: 2 },
    ],
  },
  {
    id: "goat-cheese",
    name: "Goat Cheese",
    emoji: "🧀",
    tags: [
      { name: "Savory", weight: 4 },
      { name: "Zest", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "croutons",
    name: "Garlic Croutons",
    emoji: "🍞",
    tags: [
      { name: "Crunch", weight: 5 },
      { name: "Savory", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "dried-cranberries",
    name: "Dried Cranberries",
    emoji: "🍒",
    tags: [
      { name: "Sweet", weight: 4 },
      { name: "Colorful", weight: 3 },
      { name: "Bite", weight: 2 },
    ],
  },
  {
    id: "mandarin-oranges",
    name: "Mandarin Oranges",
    emoji: "🍊",
    tags: [
      { name: "Sweet", weight: 5 },
      { name: "Colorful", weight: 4 },
      { name: "Bite", weight: 3 },
    ],
  },

  // Asian-inspired ingredients
  {
    id: "edamame",
    name: "Edamame",
    emoji: "🫛",
    tags: [
      { name: "Protein", weight: 3 },
      { name: "Colorful", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "water-chestnuts",
    name: "Water Chestnuts",
    emoji: "🌰",
    tags: [
      { name: "Crunch", weight: 5 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "sesame-seeds",
    name: "Toasted Sesame Seeds",
    emoji: "⚪",
    tags: [
      { name: "Crunch", weight: 3 },
      { name: "Umami", weight: 3 },
    ],
  },

  // Mediterranean ingredients
  {
    id: "olives",
    name: "Kalamata Olives",
    emoji: "🫒",
    tags: [
      { name: "Savory", weight: 5 },
      { name: "Zest", weight: 3 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "artichoke-hearts",
    name: "Artichoke Hearts",
    emoji: "🌱",
    tags: [
      { name: "Savory", weight: 4 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "sun-dried-tomatoes",
    name: "Sun-Dried Tomatoes",
    emoji: "🍅",
    tags: [
      { name: "Savory", weight: 5 },
      { name: "Sweet", weight: 3 },
      { name: "Umami", weight: 4 },
      { name: "Bite", weight: 3 },
    ],
  },
  {
    id: "roasted-red-peppers",
    name: "Roasted Red Peppers",
    emoji: "🫑",
    tags: [
      { name: "Sweet", weight: 3 },
      { name: "Savory", weight: 4 },
      { name: "Colorful", weight: 4 },
      { name: "Bite", weight: 3 },
    ],
  },
]
