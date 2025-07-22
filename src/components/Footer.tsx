
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-foreground mb-4">
              Republic
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Clear insights and analysis on public financial markets, helping investors 
              make informed decisions in today's complex economic landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent-blue transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-blue transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-blue transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Investment Tools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio Tracking</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Risk Assessment</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Republic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/admin" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
