import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Image from "next/image"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dropping Streetwear",
  description: "Premium streetwear collection",
  generator: "v0.app",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Dropping Streetwear",
    description: "Premium streetwear collection",
    images: ["/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dropping Streetwear",
    description: "Premium streetwear collection",
    images: ["/logo.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
