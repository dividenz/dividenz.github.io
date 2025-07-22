
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-gradient-hero border-t border-accent-gold/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-bold bg-gradient-text bg-clip-text text-transparent mb-4">
              Debt Capital Chronicles
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The premier private debt intelligence platform providing deep insights 
              on credit markets, direct lending opportunities, and industry-shaping trends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent-gold transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-gold transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-gold transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent-cream">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">Credit Analysis</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">Direct Lending</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">Portfolio Risk</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">Market Intelligence</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent-cream">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-accent-gold/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Debt Capital Chronicles. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent-cream transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/admin" className="text-muted-foreground hover:text-accent-cream transition-colors text-sm">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
