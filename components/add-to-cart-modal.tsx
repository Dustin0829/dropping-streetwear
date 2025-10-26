"use client"

import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { X } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  colors: string[]
  sizes: string[]
}

export function AddToCartModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      color: selectedColor,
      size: selectedSize,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">{product.name}</h2>

        {/* Color Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-3">COLOR</label>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border transition ${
                  selectedColor === color
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-3">SIZE</label>
          <div className="grid grid-cols-4 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 border transition text-sm ${
                  selectedSize === size
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-3">QUANTITY</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 border border-border hover:border-foreground transition"
            >
              −
            </button>
            <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 border border-border hover:border-foreground transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-border">
          <p className="text-lg font-semibold">${(product.price * quantity).toFixed(2)}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-border hover:bg-muted transition font-semibold"
          >
            CANCEL
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 py-3 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}
