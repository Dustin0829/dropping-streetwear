"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCart()

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">YOUR CART</h1>
            <p className="text-lg text-muted-foreground mb-8">Your cart is empty</p>
            <Link
              href="/store"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-semibold hover:opacity-90 transition"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">YOUR CART</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 pb-6 border-b border-border">
                    <div className="relative h-32 w-32 flex-shrink-0 bg-card rounded">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover rounded"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.color && `Color: ${item.color}`}
                        {item.size && ` • Size: ${item.size}`}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 border border-border hover:bg-muted transition"
                          >
                            −
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 border border-border hover:bg-muted transition"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive/80 transition mt-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-card p-6 rounded-lg h-fit">
              <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(getTotal() * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>${(getTotal() * 1.1).toFixed(2)}</span>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-primary text-primary-foreground py-3 font-semibold text-center hover:opacity-90 transition mb-3"
              >
                CHECKOUT
              </Link>

              <Link
                href="/store"
                className="block w-full border border-border py-3 font-semibold text-center hover:bg-muted transition"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
