
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Search, BarChart3, Building2, Target, Activity } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Market Trends Analysis",
    description: "Real-time analysis of market movements, identifying patterns and forecasting future trends with advanced analytics.",
    gradient: "bg-accent-blue/10",
    iconColor: "text-accent-blue"
  },
  {
    icon: Search,
    title: "Investment Opportunities",
    description: "Discover undervalued assets and emerging market opportunities with our AI-powered screening tools.",
    gradient: "bg-accent-orange/10",
    iconColor: "text-accent-orange"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track portfolio performance, risk metrics, and benchmark comparisons with comprehensive reporting.",
    gradient: "bg-accent-pink/10",
    iconColor: "text-accent-pink"
  },
  {
    icon: Building2,
    title: "Sector Intelligence",
    description: "Deep insights into specific sectors, industry trends, and company fundamentals driving market movements.",
    gradient: "bg-accent-green/10",
    iconColor: "text-accent-green"
  },
  {
    icon: Target,
    title: "Risk Assessment",
    description: "Advanced risk modeling and stress testing to help you make informed investment decisions.",
    gradient: "bg-accent-blue/10",
    iconColor: "text-accent-blue"
  },
  {
    icon: Activity,
    title: "Real-time Data",
    description: "Live market data, news feeds, and economic indicators to keep you ahead of market movements.",
    gradient: "bg-accent-orange/10",
    iconColor: "text-accent-orange"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent-orange rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block bg-gradient-button-blue bg-clip-text text-transparent">
              Smart Investing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and insights to help you make informed investment decisions 
            in today's complex financial markets.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-white border border-border rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted border border-border">
            <span className="text-sm text-muted-foreground">
              Plus many more features to power your investment strategy
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
