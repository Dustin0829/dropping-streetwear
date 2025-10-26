"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">ORDER CONFIRMED</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your purchase! Your order has been placed successfully.
            </p>
            <p className="text-muted-foreground mb-8">A confirmation email has been sent to {formData.email}</p>
            <Link
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-semibold hover:opacity-90 transition"
            >
              BACK TO HOME
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
          <h1 className="text-4xl font-bold mb-12">CHECKOUT</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-card p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-6">SHIPPING INFORMATION</h2>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground mb-4"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground mb-4"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground mb-4"
                  />

                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-card p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-6">PAYMENT INFORMATION</h2>

                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground mb-4"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground"
                    />
                    <input
                      type="text"
                      name="cardCVC"
                      placeholder="CVC"
                      value={formData.cardCVC}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 font-bold text-lg hover:opacity-90 transition"
                >
                  PLACE ORDER
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-card p-6 rounded-lg h-fit">
              <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
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

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${(getTotal() * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
