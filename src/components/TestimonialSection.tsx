
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Republic has completely transformed how I analyze market trends. The insights are clear, actionable, and always ahead of the curve.",
    author: "Sarah Chen",
    title: "Portfolio Manager",
    company: "Goldman Sachs",
    avatar: "SC"
  },
  {
    quote: "The real-time data and analysis tools have helped me identify opportunities I would have missed otherwise. Incredible platform.",
    author: "Michael Rodriguez",
    title: "Investment Analyst", 
    company: "BlackRock",
    avatar: "MR"
  },
  {
    quote: "Finally, a platform that makes complex market data simple to understand. The ROI has been outstanding since day one.",
    author: "Jennifer Park",
    title: "Fund Manager",
    company: "Vanguard",
    avatar: "JP"
  }
]

export function TestimonialSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Users
            <span className="block bg-gradient-button-blue bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how investment professionals are using Republic to make better decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white border border-border rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-accent-blue" />
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-button-blue rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-accent-blue font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
