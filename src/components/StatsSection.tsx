
import { useEffect, useState } from "react"

interface StatItemProps {
  value: string
  label: string
  prefix?: string
  suffix?: string
  delay?: number
  bgColor?: string
  textColor?: string
}

function StatItem({ value, label, prefix = "", suffix = "", delay = 0, bgColor = "bg-accent-blue/10", textColor = "text-accent-blue" }: StatItemProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const numericValue = parseInt(value.replace(/[^\d]/g, ''))
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const duration = 2000
      const increment = numericValue / (duration / 16)
      
      const counter = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setCurrentValue(numericValue)
          clearInterval(counter)
        } else {
          setCurrentValue(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(counter)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [numericValue, delay])
  
  const formatValue = (val: number) => {
    if (val >= 1000) {
      return `${prefix}${(val / 1000).toFixed(1)}K${suffix}`
    }
    return `${prefix}${val}${suffix}`
  }
  
  return (
    <div className={`text-center p-8 rounded-2xl ${bgColor} transition-transform duration-300 hover:scale-105 animate-counter`}>
      <div className={`text-4xl md:text-5xl font-bold ${textColor} mb-2`}>
        {numericValue >= 1000 ? formatValue(currentValue) : `${prefix}${currentValue}${suffix}`}
      </div>
      <div className="text-muted-foreground font-medium text-lg">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Investors
            <span className="block bg-gradient-button-blue bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals making smarter investment decisions with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <StatItem 
            value="50" 
            label="Markets Tracked"
            suffix="+"
            delay={0}
            bgColor="bg-accent-blue/10"
            textColor="text-accent-blue"
          />
          <StatItem 
            value="25000" 
            label="Active Users"
            suffix="+"
            delay={200}
            bgColor="bg-accent-orange/10"
            textColor="text-accent-orange"
          />
          <StatItem 
            value="1000" 
            label="Daily Reports"
            suffix="+"
            delay={400}
            bgColor="bg-accent-pink/10"
            textColor="text-accent-pink"
          />
          <StatItem 
            value="99" 
            label="Uptime"
            suffix="%"
            delay={600}
            bgColor="bg-accent-green/10"
            textColor="text-accent-green"
          />
        </div>
      </div>
    </section>
  )
}
