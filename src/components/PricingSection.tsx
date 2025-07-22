
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    description: "Perfect for individual investors getting started",
    features: [
      "Basic market analysis",
      "Daily market reports",
      "Email alerts",
      "Community access",
      "Mobile app"
    ],
    popular: false,
    bgColor: "bg-white",
    buttonStyle: "border border-border bg-white hover:bg-muted text-foreground"
  },
  {
    name: "Professional",
    price: "$149",
    period: "per month", 
    description: "Advanced tools for serious investors",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "Real-time alerts",
      "Portfolio tracking",
      "API access",
      "Priority support"
    ],
    popular: true,
    bgColor: "bg-gradient-button-blue",
    buttonStyle: "bg-white text-accent-blue hover:bg-muted"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for institutions",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated account manager",
      "White-label solutions",
      "24/7 phone support",
      "Custom training"
    ],
    popular: false,
    bgColor: "bg-white",
    buttonStyle: "border border-border bg-white hover:bg-muted text-foreground"
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent
            <span className="block bg-gradient-button-blue bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your investment needs. Upgrade or downgrade at any time.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 rounded-2xl border-0 animate-fade-in-up ${
                plan.popular 
                  ? `${plan.bgColor} text-white shadow-lg` 
                  : `${plan.bgColor} border border-border`
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-accent-blue text-sm font-semibold shadow-md">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                <CardDescription className={`mt-4 text-base ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        plan.popular ? 'bg-white/20' : 'bg-accent-green/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-accent-green'}`} />
                      </div>
                      <span className={plan.popular ? 'text-white' : 'text-foreground'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.buttonStyle} transition-all duration-300 hover:scale-105 font-semibold`}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
