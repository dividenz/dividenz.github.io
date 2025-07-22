
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"

export function Navigation() {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-foreground">
                Republic
              </div>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/analysis" 
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/analysis') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Market Analysis
              </Link>
              <Link 
                to="/events" 
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/events') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Key Events
              </Link>
              <Link 
                to="/key-deals" 
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive('/key-deals') 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Investment Deals
              </Link>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="hidden md:inline-flex text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
              <Button className="bg-gradient-button-blue hover:shadow-lg text-white font-medium transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
