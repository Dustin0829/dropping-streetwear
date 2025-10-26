"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useState } from "react"

const products = [
  {
    id: "1",
    name: "Oval Logo Cap - Black",
    price: 45,
    image: "/black-cap-streetwear.jpg",
    category: "Caps",
    colors: ["Black", "Brown", "Teal"],
    sizes: ["One Size"],
  },
  {
    id: "2",
    name: "Oval Logo Cap - Teal",
    price: 45,
    image: "/teal-cap-streetwear.jpg",
    category: "Caps",
    colors: ["Black", "Brown", "Teal"],
    sizes: ["One Size"],
  },
  {
    id: "3",
    name: "Slow Grind Tee - White",
    price: 35,
    image: "/white-tshirt-streetwear.jpg",
    category: "T-Shirts",
    colors: ["White", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "4",
    name: "Premium Hoodie - Black",
    price: 85,
    image: "/black-hoodie-streetwear.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "5",
    name: "Premium Hoodie - Green",
    price: 85,
    image: "/green-hoodie-streetwear.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "6",
    name: "Premium Hoodie - Brown",
    price: 85,
    image: "/brown-hoodie-streetwear.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "7",
    name: "Premium Hoodie - Gray",
    price: 85,
    image: "/gray-hoodie-streetwear.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "8",
    name: "Model Fit Tee - White",
    price: 40,
    image: "/model-fit-tshirt-white.jpg",
    category: "T-Shirts",
    colors: ["White", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["Caps", "T-Shirts", "Hoodies"]
  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-balance">SHOP COLLECTION</h1>

          {/* Category Filter */}
          <div className="flex gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 font-semibold transition ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
            >
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
