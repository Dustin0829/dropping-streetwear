"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export function Navbar() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            DROPPING
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-accent transition">
              HOME
            </Link>
            <Link href="/store" className="text-sm hover:text-accent transition">
              SHOP
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 hover:text-accent transition" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
