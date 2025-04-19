import SaladGenerator from "@/components/salad-generator"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Salad Recipe Generator</h1>
        <SaladGenerator />
      </div>
    </main>
  )
}
