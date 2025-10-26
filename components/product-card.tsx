"use client"

import Image from "next/image"
import { useState } from "react"
import { AddToCartModal } from "./add-to-cart-modal"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  colors: string[]
  sizes: string[]
}

export function ProductCard({ product }: { product: Product }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="group">
        <div className="relative h-64 w-full overflow-hidden bg-card rounded-lg mb-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            unoptimized
            className="object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">₱{product.price}</p>
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-primary text-primary-foreground py-2 font-semibold hover:opacity-90 transition"
        >
          ADD TO CART
        </button>
      </div>

      {showModal && <AddToCartModal product={product} onClose={() => setShowModal(false)} />}
    </>
  )
}
