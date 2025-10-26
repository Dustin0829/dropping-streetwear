import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const models = [
    {
      id: 1,
      image: "/black-tee.jpg",
      title: "SLOW GRIND Collection",
      description: "Premium streetwear in action",
    },
    {
      id: 2,
      image: "/all-caps.jpg",
      title: "Signature Caps",
      description: "Available in Multiple Colors",
    },
    {
      id: 3,
      image: "/shirt.jpg",
      title: "Premium Tees",
      description: "SLOW GRIND - Comfort Meets Style",
    },
    {
      id: 4,
      image: "/4-colors-hoodie.jpg",
      title: "Hoodie Collection",
      description: "Four Colorways Available",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 text-balance italic">DROPPING STREETWEAR</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Premium streetwear for those who move at their own pace. Slow grind, big dreams.
          </p>
          <Link
            href="/store"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 font-semibold hover:opacity-90 transition"
          >
            SHOP NOW
          </Link>
        </div>

        {/* Models Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map((model) => (
              <div key={model.id} className="group relative overflow-hidden bg-card rounded-lg">
                <div className="relative h-96 md:h-[500px] w-full">
                  <Image
                    src={model.image || "/placeholder.svg"}
                    alt={model.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{model.title}</h3>
                  <p className="text-white/80">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center italic">THE STREETWEAR MANIFESTO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">GRIND</h3>
              <p className="text-muted-foreground">
                Slow and steady wins the race. Every day we grind, every drop we deliver quality that reflects the hustle behind the brand.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">AUTHENTICITY</h3>
              <p className="text-muted-foreground">
                Real culture, real designs. We stay true to the streets and create pieces that speak to those who live the lifestyle, not just wear the clothes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">ELEVATE</h3>
              <p className="text-muted-foreground">
                Rising from the pavement to reach new heights. We're building a community of dreamers and doers, one drop at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Limited Edition Drops</h2>
          <p className="text-lg text-muted-foreground mb-8">
            New collections released weekly. Subscribe to stay updated on exclusive drops.
          </p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground flex-1 max-w-xs"
            />
            <button className="bg-primary text-primary-foreground px-8 py-3 font-semibold hover:opacity-90 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
