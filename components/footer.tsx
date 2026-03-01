import { Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Systems", href: "#systems" },
  { label: "Full Funnel", href: "#funnel" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold mb-2">
              Watkins Automations
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Automated systems for auto body and tire shops.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/watkins.automations"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/amre-watkins"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Watkins Automations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
