"use client"

import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { X } from "lucide-react"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

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
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Please select options",
        description: "Please select both color and size before adding to cart.",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      color: selectedColor,
      size: selectedSize,
    })
    
    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedColor}, ${selectedSize}) has been added to your cart.`,
    })
    
    onClose()
  }

  const getColorSwatch = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Black': '#000000',
      'Brown': '#8B4513',
      'Green': '#228B22',
      'White': '#FFFFFF',
      'Gray': '#808080',
    }
    return colorMap[color] || '#000000'
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-card rounded-lg max-w-4xl w-full p-6 relative my-4 max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10">
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Product Preview */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">{product.name}</h2>
            <div className="relative h-64 lg:h-96 w-full bg-card rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <p className="text-xl lg:text-2xl font-bold">₱{product.price}</p>
          </div>
          
          {/* Right Side - Options */}
          <div className="space-y-6">

        {/* Color Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-3">COLOR</label>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? "border-primary scale-110"
                    : "border-border hover:border-foreground hover:scale-105"
                }`}
                style={{ backgroundColor: getColorSwatch(color) }}
                title={color}
              />
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

            {/* Total Price */}
            <div className="pb-6 border-b border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total</span>
                <p className="text-xl font-bold">₱{(product.price * quantity).toFixed(2)}</p>
              </div>
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
                className={`flex-1 py-3 font-semibold transition ${
                  !selectedColor || !selectedSize
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
                disabled={!selectedColor || !selectedSize}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
