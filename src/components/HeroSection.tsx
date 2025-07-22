
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowRight, BarChart3, PieChart, Activity, DollarSign } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-16">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Floating shapes */}
        <div className="absolute top-32 left-12 w-24 h-24 bg-accent-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-64 right-16 w-16 h-16 bg-accent-orange/15 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-48 left-1/4 w-12 h-12 bg-accent-pink/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <defs>
              <pattern id="modernGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0,40 L40,0" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M0,0 L40,40" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#modernGrid)"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Notification Badge */}
            <div className="inline-block">
              <Badge variant="secondary" className="bg-muted text-accent-blue border-border px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                50+ markets tracked daily
              </Badge>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground mb-2">Public Market</span>
                <span className="block bg-gradient-button-blue bg-clip-text text-transparent">
                  Intelligence
                </span>
                <span className="block text-foreground">Made Simple</span>
              </h1>
            </div>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Clear insights and analysis on financial markets, investment trends, and key opportunities shaping the global economy.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-gradient-button-blue hover:shadow-card-hover text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-muted px-8 py-6 text-lg font-medium"
              >
                View Sample Report
              </Button>
            </div>
          </div>
          
          {/* Right Visual Elements */}
          <div className="relative lg:flex hidden items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl p-8 shadow-card-hover border border-border animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">Market Overview</h3>
                    <div className="flex items-center text-accent-green">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+2.4%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">S&P 500</span>
                      <span className="text-foreground font-medium">4,156.83</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">NASDAQ</span>
                      <span className="text-foreground font-medium">12,845.79</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-button-blue h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Metric Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-card border border-border animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent-blue/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Volume</div>
                    <div className="text-sm font-medium text-foreground">2.4B</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-card border border-border animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                    <PieChart className="w-4 h-4 text-accent-orange" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Portfolio</div>
                    <div className="text-sm font-medium text-foreground">$2.1M</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-white rounded-xl p-4 shadow-card border border-border animate-float" style={{ animationDelay: '3s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent-green/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-accent-green" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Profit</div>
                    <div className="text-sm font-medium text-foreground">+8.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
