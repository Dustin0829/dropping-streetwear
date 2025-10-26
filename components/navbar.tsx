"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"

export function Navbar() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            DROPPING STREETWEAR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 hover:text-accent transition" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-sm hover:text-accent transition"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/store" 
                className="block text-sm hover:text-accent transition"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
