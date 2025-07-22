
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Debt Capital Chronicles has transformed our private debt strategy development. The credit market intelligence depth is unmatched in the industry.",
    author: "Sarah Chen",
    title: "Chief Investment Officer",
    company: "Pacific Pension Fund"
  },
  {
    quote: "The direct lending opportunity discovery helped us identify alpha opportunities 6 months ahead of our competition. Exceptional insights.",
    author: "Michael Rodriguez",
    title: "Managing Director",
    company: "Meridian Credit Partners"
  },
  {
    quote: "Real-time credit analysis and portfolio risk analytics give us the institutional edge we need in today's complex debt markets.",
    author: "Jennifer Park",
    title: "Senior Portfolio Manager",
    company: "Apex Insurance Capital"
  }
]

export function TestimonialSection() {
  return (
    <section className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-accent-gold/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-accent-muted-gold/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-accent-cream mb-6">
            Trusted by
            <span className="block bg-gradient-text bg-clip-text text-transparent">
              Institutional Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what top private debt professionals are saying about our intelligence platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lift transition-all duration-300 hover:-translate-y-1 bg-gradient-glass backdrop-blur-sm border border-accent-gold/20 hover:border-accent-gold/40 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-accent-gold mb-6 opacity-60" />
                <blockquote className="text-accent-cream mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-accent-gold/30 pt-6">
                  <div className="font-semibold text-accent-cream">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-sm text-accent-gold font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
