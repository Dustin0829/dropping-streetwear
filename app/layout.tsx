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
  metadataBase: new URL("https://dropping-streetwear.vercel.app"),
  title: "Dropping Streetwear | Premium Streetwear Collection",
  description: "Premium streetwear for those who move at their own pace. Slow grind, big dreams. Shop our collection of tees, hoodies, and signature caps.",
  keywords: ["streetwear", "premium apparel", "slow grind", "Dropping Streetwear", "tees", "hoodies", "caps"],
  authors: [{ name: "Dropping Streetwear" }],
  creator: "Dropping Streetwear",
  publisher: "Dropping Streetwear",
  generator: "v0.app",
  icons: {
    icon: "https://dropping-streetwear.vercel.app/logo.jpg",
    shortcut: "https://dropping-streetwear.vercel.app/logo.jpg",
    apple: "https://dropping-streetwear.vercel.app/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dropping-streetwear.vercel.app",
    siteName: "Dropping Streetwear",
    title: "Dropping Streetwear | Premium Streetwear Collection",
    description: "Premium streetwear for those who move at their own pace. Slow grind, big dreams. Shop our collection of tees, hoodies, and signature caps.",
    images: [
      {
        url: "https://dropping-streetwear.vercel.app/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dropping Streetwear Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dropping Streetwear | Premium Streetwear Collection",
    description: "Premium streetwear for those who move at their own pace. Slow grind, big dreams. Shop our collection of tees, hoodies, and signature caps.",
    images: ["https://dropping-streetwear.vercel.app/logo.jpg"],
    creator: "@droppingstreetwear",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
