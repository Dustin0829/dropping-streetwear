export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DROPPING</h3>
            <p className="text-muted-foreground text-sm">Premium streetwear for the culture.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/store" className="hover:text-foreground transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="/store" className="hover:text-foreground transition">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">FOLLOW</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Dropping Streetwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
