import React, { useState, useMemo } from 'react';
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowLeft, Calendar, Clock, User, Search, TrendingUp, Target, Briefcase, Users, Newspaper, FileText } from 'lucide-react';

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  content: string;
  badgeColor: string;
  image: string;
  heroImage?: string;
}

const articles: Article[] = [
  {
    id: '1',
    category: 'Market Analysis',
    title: 'Equity Markets Rally on Strong Earnings Growth',
    excerpt: 'S&P 500 companies deliver 12.4% earnings growth as tech sector leads broad market expansion.',
    author: 'Sarah Mitchell',
    publishedAt: 'Jan 15, 2024',
    readTime: '5 min read',
    badgeColor: 'bg-green-500/20 text-green-300',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    content: `
      <p>The S&P 500 delivered robust earnings growth of 12.4% in Q4 2023, marking the strongest quarterly performance in two years as technology and healthcare sectors outpaced expectations.</p>
      
      <h3>Sector Performance Leaders</h3>
      <p>Technology companies led earnings expansion with 18.7% growth, driven by AI adoption and cloud infrastructure demand. Mega-cap tech stocks including Apple, Microsoft, and Google parent Alphabet exceeded analyst forecasts by an average of 8.2%.</p>
      
      <p>Healthcare and consumer discretionary sectors also showed strong performance, with earnings growth of 14.1% and 11.8% respectively, reflecting economic resilience and consumer spending strength.</p>
      
      <h3>Market Valuation Metrics</h3>
      <p>Despite the earnings growth, market valuations remain reasonable with the S&P 500 trading at 18.4x forward earnings, below the 10-year average of 19.2x. This suggests continued upside potential if earnings momentum sustains.</p>
      
      <p>Small-cap stocks have shown particular value appeal, trading at 14.8x forward earnings compared to their historical average of 16.5x, presenting attractive opportunities for long-term investors.</p>
      
      <h3>Economic Outlook</h3>
      <p>Analysts project continued earnings growth of 8-10% for 2024, supported by controlled inflation, stable employment, and sustained consumer spending. However, geopolitical risks and interest rate uncertainties remain key monitoring factors.</p>
    `
  },
  {
    id: '2',
    category: 'Market Trends',
    title: 'ESG Investment Flows Reach Record $2.3 Trillion',
    excerpt: 'Sustainable investing accelerates as institutional investors prioritize climate and social impact metrics.',
    author: 'Michael Torres',
    publishedAt: 'Jan 14, 2024',
    readTime: '4 min read',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a',
    heroImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    content: `
      <p>Global ESG investment flows reached a record $2.3 trillion in 2023, as institutional investors increasingly integrate environmental, social, and governance factors into their portfolio strategies.</p>
      
      <h3>Institutional Adoption</h3>
      <p>Pension funds and insurance companies led ESG adoption, with 87% now incorporating sustainability metrics into investment decisions. Asset managers report that ESG mandates represent 35% of new institutional RFPs.</p>
      
      <p>The shift reflects both regulatory requirements and growing recognition that ESG factors materially impact long-term investment returns and risk management.</p>
      
      <h3>Performance Impact</h3>
      <p>ESG-focused funds have demonstrated competitive risk-adjusted returns, with the MSCI KLD 400 Social Index outperforming the S&P 500 by 1.2% annually over the past five years.</p>
      
      <p>Climate-focused strategies have shown particular strength, benefiting from the energy transition and regulatory support for clean technology investments.</p>
      
      <h3>Future Outlook</h3>
      <p>Regulatory frameworks continue evolving, with new disclosure requirements driving increased transparency. Investors expect ESG integration to become standard practice rather than a specialized strategy within the next five years.</p>
    `
  },
  {
    id: '3',
    category: 'Regulatory Impact',
    title: 'SEC Climate Disclosure Rules Transform Reporting',
    excerpt: 'New climate risk disclosure requirements reshape how public companies communicate environmental impact.',
    author: 'Emma Johnson',
    publishedAt: 'Jan 13, 2024',
    readTime: '6 min read',
    badgeColor: 'bg-red-500/20 text-red-300',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    heroImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    content: `
      <p>The SEC's new climate disclosure rules are fundamentally changing how public companies report environmental risks and opportunities, creating new standards for transparency and accountability.</p>
      
      <h3>Regulatory Framework</h3>
      <p>Large public companies must now disclose material climate risks, greenhouse gas emissions, and climate transition plans in their annual reports. The phased implementation begins with large accelerated filers in 2024.</p>
      
      <p>Scope 1 and 2 emissions reporting becomes mandatory for companies exceeding $700 million in revenue, with third-party assurance required for the largest filers starting in 2026.</p>
      
      <h3>Market Impact</h3>
      <p>Early compliance leaders are seeing improved access to ESG-focused capital, with sustainability-linked financing terms becoming more favorable. Companies with robust climate strategies report 15-20% lower borrowing costs.</p>
      
      <p>The disclosure requirements are driving increased investment in climate risk assessment tools and sustainability management systems, creating opportunities in the climate technology sector.</p>
      
      <h3>Investment Implications</h3>
      <p>Enhanced disclosure is improving investor ability to assess climate risks and opportunities, leading to more efficient capital allocation toward sustainable business models.</p>
      
      <p>We expect continued convergence between financial and sustainability reporting, with climate metrics becoming as standardized as traditional financial KPIs within five years.</p>
    `
  },
  {
    id: '4',
    category: 'Technology Sector',
    title: 'AI Transformation Drives Tech Sector Revaluation',
    excerpt: 'Artificial intelligence adoption accelerates across industries, creating new investment opportunities and valuation metrics.',
    author: 'Jennifer Chen',
    publishedAt: 'Jan 15, 2024',
    readTime: '6 min read',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    heroImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    content: `
      <p>The artificial intelligence revolution is reshaping technology sector valuations as companies across industries integrate AI capabilities into their core business models and operations.</p>
      
      <h3>Market Leadership</h3>
      <p>AI-focused companies have generated exceptional returns, with the sector growing 47% in 2023 compared to the broader tech index's 28% gain. Leading AI chipmakers, software platforms, and cloud infrastructure providers have seen their valuations expand significantly.</p>
      
      <p>Enterprise adoption is accelerating, with 73% of Fortune 500 companies now implementing AI solutions across operations, customer service, and decision-making processes.</p>
      
      <h3>Investment Themes</h3>
      <p>Infrastructure providers supporting AI workloads show strong fundamentals, including data center operators, semiconductor manufacturers, and cloud computing platforms. These companies benefit from sustained capital expenditure cycles.</p>
      
      <p>AI software applications are creating new SaaS categories with higher pricing power and customer retention rates compared to traditional enterprise software.</p>
      
      <h3>Valuation Evolution</h3>
      <p>Traditional technology valuation metrics are evolving to incorporate AI capabilities, data assets, and compute efficiency. Revenue multiples for AI-native companies trade at 30-50% premiums to traditional software peers.</p>
      
      <p>Investors are focusing on sustainable competitive advantages, including proprietary datasets, model performance, and integration depth rather than just revenue growth rates.</p>
    `
  },
  {
    id: '5',
    category: 'Healthcare Sector',
    title: 'Biotech Innovation Drives Healthcare Market Expansion',
    excerpt: 'Breakthrough therapies and precision medicine advances create new investment opportunities in healthcare markets.',
    author: 'David Kim',
    publishedAt: 'Jan 12, 2024',
    readTime: '5 min read',
    badgeColor: 'bg-green-500/20 text-green-300',
    image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
    heroImage: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
    content: `
      <p>The healthcare sector is experiencing unprecedented innovation, with breakthrough biotechnology companies developing revolutionary treatments that are reshaping market dynamics and creating substantial investment opportunities.</p>
      
      <h3>Innovation Pipeline</h3>
      <p>Gene and cell therapy platforms are advancing rapidly, with over 200 clinical trials currently underway. FDA approvals for novel treatment modalities increased 35% in 2023, including breakthrough designations for cancer immunotherapies and rare disease treatments.</p>
      
      <p>Precision medicine approaches are enabling targeted therapies with superior efficacy and safety profiles, commanding premium pricing and generating strong intellectual property moats.</p>
      
      <h3>Market Dynamics</h3>
      <p>Healthcare spending continues growing at 4-5% annually, driven by aging demographics and increased access to innovative treatments. Specialty pharmaceutical markets are expanding particularly rapidly, with orphan drug revenues growing 12% year-over-year.</p>
      
      <p>Digital health integration is improving treatment outcomes and reducing costs, creating opportunities for healthcare technology companies and data analytics platforms.</p>
      
      <h3>Investment Outlook</h3>
      <p>Biotech valuations have become more attractive following the 2022-2023 correction, with quality companies trading at reasonable multiples relative to their innovation potential and market opportunities.</p>
      
      <p>Partnerships between large pharmaceutical companies and biotech innovators are increasing, providing validation and capital for breakthrough therapies while creating multiple pathways to value realization.</p>
    `
  },
  {
    id: '6',
    category: 'Global Markets',
    title: 'Emerging Markets Equity Rally Gains Momentum',
    excerpt: 'Chinese stimulus measures and improved global trade dynamics drive emerging markets outperformance.',
    author: 'Robert Johnson',
    publishedAt: 'Jan 16, 2024',
    readTime: '4 min read',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    heroImage: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
    content: `
      <p>Emerging markets equities are experiencing their strongest rally in three years, with the MSCI Emerging Markets Index gaining 18.7% year-to-date as policy stimulus and improved sentiment drive capital flows.</p>
      
      <h3>Regional Performance</h3>
      <p>Chinese markets lead the rally with Shanghai Composite and Hang Seng indices posting gains exceeding 20%. Government stimulus measures including monetary easing and fiscal support are boosting investor confidence in the world's second-largest economy.</p>
      
      <p>India continues showing strong fundamentals with GDP growth exceeding 6%, while Latin American markets benefit from commodity price strength and political stability improvements.</p>
      
      <h3>Capital Flow Dynamics</h3>
      <p>Foreign investment flows into emerging market equities reached $47 billion in Q4 2023, the largest quarterly inflow since 2021. The rotation reflects attractive valuations and improving economic fundamentals relative to developed markets.</p>
      
      <p>Currency stability across major emerging market economies is supporting investor confidence, with central banks maintaining adequate foreign exchange reserves and implementing prudent monetary policies.</p>
      
      <h3>Investment Outlook</h3>
      <p>Emerging markets trade at attractive valuations with price-to-earnings ratios 25% below developed market averages. Structural growth drivers including demographic trends, infrastructure development, and technology adoption support long-term investment prospects.</p>
      
      <p>Selective opportunities exist across sectors, particularly in consumer discretionary, technology, and renewable energy companies benefiting from urbanization and energy transition trends.</p>
    `
  }
];

const categories = [
  { name: 'All', icon: Newspaper },
  { name: 'Market Analysis', icon: TrendingUp },
  { name: 'Market Trends', icon: Target },
  { name: 'Regulatory Impact', icon: Briefcase },
  { name: 'Technology Sector', icon: Users },
  { name: 'Healthcare Sector', icon: FileText },
  { name: 'Global Markets', icon: Newspaper }
];

export default function Analysis() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen font-primary bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full">
            <path d="M0,400 C400,200 800,600 1200,300 L1200,800 L0,800 Z" fill="url(#analysisWave)" />
            <defs>
              <linearGradient id="analysisWave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(220 70% 50%)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="hsl(45 100% 65%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(220 60% 25%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/10 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-accent-blue/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent-platinum/10 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Market
              <span className="block bg-gradient-text bg-clip-text text-transparent">
                Analysis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-platinum mb-12 leading-relaxed">
              Deep insights into public markets, sector trends, and investment opportunities 
              shaping the global financial landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent-platinum w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 bg-card/50 border-accent-gold/20 text-white placeholder:text-accent-platinum focus:border-accent-gold"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`${
                      selectedCategory === category.name
                        ? 'bg-gradient-button text-accent-foreground'
                        : 'border-accent-gold/30 bg-card/50 text-accent-platinum hover:bg-accent-gold/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <Card 
                key={article.id}
                className="group cursor-pointer hover:shadow-gold transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-accent-gold/20 overflow-hidden"
                onClick={() => handleArticleClick(article)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={article.badgeColor}>
                      {article.category}
                    </Badge>
                    <div className="text-sm text-accent-platinum">{article.readTime}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-accent-gold transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-accent-platinum mb-4 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-accent-platinum">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center text-sm text-accent-platinum">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.publishedAt}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-accent-gold/20">
          {selectedArticle && (
            <>
              <DialogHeader>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseModal}
                  className="absolute left-4 top-4 text-accent-platinum hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </DialogHeader>
              
              <div className="pt-12">
                {selectedArticle.heroImage && (
                  <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                    <img 
                      src={selectedArticle.heroImage} 
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="mb-6">
                  <Badge className={selectedArticle.badgeColor}>
                    {selectedArticle.category}
                  </Badge>
                </div>
                
                <DialogTitle className="text-3xl font-display font-bold text-white mb-6 leading-tight">
                  {selectedArticle.title}
                </DialogTitle>
                
                <div className="flex items-center space-x-6 mb-8 text-accent-platinum">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedArticle.publishedAt}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {selectedArticle.readTime}
                  </div>
                </div>
                
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}