"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useState } from "react"

const products = [
  {
    id: "2",
    name: "Oval Logo Cap - Brown",
    price: 600,
    image: "/cap-brown.jpg",
    category: "Caps",
    colors: ["Black", "Brown", "Green"],
    sizes: ["One Size"],
  },
  {
    id: "3",
    name: "Oval Logo Cap - Green",
    price: 600,
    image: "/cap-green.jpg",
    category: "Caps",
    colors: ["Black", "Brown", "Green"],
    sizes: ["One Size"],
  },
  {
    id: "4",
    name: "Slow Grind Tee - White",
    price: 600,
    image: "/white-tee.jpg",
    category: "T-Shirts",
    colors: ["White", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "5",
    name: "Slow Grind Tee - Black",
    price: 600,
    image: "/black-tee.jpg",
    category: "T-Shirts",
    colors: ["White", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "6",
    name: "Premium Hoodie - Black",
    price: 2000,
    image: "/black-hoodie.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "7",
    name: "Premium Hoodie - Brown",
    price: 2000,
    image: "/brown-hoodie.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "8",
    name: "Premium Hoodie - Green",
    price: 2000,
    image: "/green-hoodie.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "9",
    name: "Premium Hoodie - Gray",
    price: 2000,
    image: "/gray-hoodie.jpg",
    category: "Hoodies",
    colors: ["Black", "Brown", "Green", "Gray"],
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
