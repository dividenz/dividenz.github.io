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
    category: 'Credit Analysis',
    title: 'Direct Lending Yields Reach 5-Year Highs Amid Rate Environment',
    excerpt: 'Private credit managers achieve 14.2% gross yields as floating-rate structures benefit from higher base rates.',
    author: 'Sarah Mitchell',
    publishedAt: 'Jan 15, 2024',
    readTime: '5 min read',
    badgeColor: 'bg-green-500/20 text-green-300',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    content: `
      <p>Direct lending funds have achieved their highest gross yields in five years, with top-tier managers reporting average gross portfolio yields of 14.2% as of Q4 2023.</p>
      
      <h3>Yield Enhancement Drivers</h3>
      <p>The current rate environment has proven highly favorable for private credit strategies employing floating-rate structures. With SOFR + spreads now averaging 11-13% for middle-market direct lending, managers are capturing significant yield expansion from the Federal Reserve's rate hiking cycle.</p>
      
      <p>Credit spreads have remained relatively stable at 550-650 basis points for traditional middle-market loans, while base rates provide the primary yield enhancement mechanism.</p>
      
      <h3>Risk-Adjusted Performance</h3>
      <p>Net returns after fees are averaging 11.8% across the asset class, substantially outperforming high-yield bonds (8.4%) and leveraged loans (9.1%) on a risk-adjusted basis. Default rates remain manageable at 1.2% by number of companies.</p>
      
      <p>The illiquidity premium embedded in private credit continues to provide attractive compensation for patient capital, with institutional investors extending average hold periods to 4-5 years.</p>
      
      <h3>Market Outlook</h3>
      <p>Looking ahead, managers expect yields to remain elevated through 2024, particularly for new vintages. However, credit selection and underwriting discipline will become increasingly important as economic uncertainty persists.</p>
    `
  },
  {
    id: '2',
    category: 'Market Trends',
    title: 'Infrastructure Debt Emerges as Institutional Favorite',
    excerpt: 'Long-duration infrastructure financing attracts pension funds seeking liability-matching assets with ESG benefits.',
    author: 'Michael Torres',
    publishedAt: 'Jan 14, 2024',
    readTime: '4 min read',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a',
    heroImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    content: `
      <p>Infrastructure debt has emerged as a preferred allocation among pension funds and insurance companies seeking long-duration assets that match their liability profiles while providing inflation protection.</p>
      
      <h3>Allocation Trends</h3>
      <p>Institutional investors allocated $47 billion to infrastructure debt strategies in 2023, representing a 35% increase from the previous year. Pension funds led this growth, with allocations averaging 8-12% of alternatives portfolios.</p>
      
      <p>The asset class offers attractive characteristics including predictable cash flows, inflation linkage, and tenor matching for long-term liabilities extending 15-30 years.</p>
      
      <h3>ESG Integration</h3>
      <p>Renewable energy infrastructure represents 60% of new deployments, aligning with institutional ESG mandates. Solar, wind, and battery storage projects offer compelling risk-adjusted returns with strong regulatory support.</p>
      
      <p>Green infrastructure debt provides additional benefits through sustainability-linked pricing and regulatory incentives, enhancing total returns while meeting ESG objectives.</p>
      
      <h3>Risk Considerations</h3>
      <p>While infrastructure debt offers stability, managers must navigate construction risk, regulatory changes, and technology obsolescence. Successful strategies emphasize operational assets with established cash flows and creditworthy counterparties.</p>
    `
  },
  {
    id: '3',
    category: 'Regulatory Impact',
    title: 'Basel III Endgame Drives Bank Lending Retreat',
    excerpt: 'Proposed banking regulations accelerate shift from traditional bank lending to private credit markets.',
    author: 'Emma Johnson',
    publishedAt: 'Jan 13, 2024',
    readTime: '6 min read',
    badgeColor: 'bg-red-500/20 text-red-300',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    heroImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    content: `
      <p>The proposed Basel III Endgame regulations are accelerating the structural shift from traditional bank lending to private credit markets, creating unprecedented opportunities for direct lending managers.</p>
      
      <h3>Regulatory Catalyst</h3>
      <p>New capital requirements will increase the cost of bank lending to middle-market companies by an estimated 20-30%, making private credit increasingly competitive. Regional banks, traditionally active in middle-market lending, face the greatest pressure.</p>
      
      <p>Risk-weighted asset calculations under the new framework particularly impact leveraged lending and real estate financing, core areas where private credit provides alternative solutions.</p>
      
      <h3>Market Displacement</h3>
      <p>We estimate $200-300 billion in lending capacity will migrate from banks to private credit over the next 3-5 years. This represents a structural tailwind for the asset class, potentially doubling the addressable market.</p>
      
      <p>Companies previously reliant on bank relationships are increasingly viewing private credit as a primary financing source rather than alternative capital.</p>
      
      <h3>Competitive Dynamics</h3>
      <p>The regulatory-driven market share shift benefits established private credit managers with scale, operational infrastructure, and established origination capabilities. First-mover advantage in relationship capture will prove crucial.</p>
      
      <p>We expect pricing power to improve as supply constraints emerge, potentially expanding net spreads by 50-100 basis points over the medium term.</p>
    `
  },
  {
    id: '4',
    category: 'Technology Sector',
    title: 'Software-as-a-Service Lending Reaches New Sophistication',
    excerpt: 'Private credit managers develop specialized underwriting for recurring revenue business models.',
    author: 'Jennifer Chen',
    publishedAt: 'Jan 15, 2024',
    readTime: '6 min read',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    heroImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    content: `
      <p>Private credit managers are developing increasingly sophisticated approaches to Software-as-a-Service (SaaS) company financing, recognizing the unique cash flow characteristics and growth dynamics of recurring revenue models.</p>
      
      <h3>Specialized Underwriting</h3>
      <p>Leading managers now employ SaaS-specific metrics including Annual Recurring Revenue (ARR), Customer Acquisition Cost (CAC), and Net Revenue Retention in credit analysis. These metrics provide better predictive power than traditional financial statements for subscription-based businesses.</p>
      
      <p>Covenant structures have evolved to reflect SaaS business models, emphasizing ARR growth rates, customer concentration, and churn metrics rather than traditional leverage ratios.</p>
      
      <h3>Attractive Fundamentals</h3>
      <p>SaaS companies offer compelling credit characteristics including predictable cash flows, high gross margins (typically 75-85%), and strong customer retention. Default rates among established SaaS borrowers remain below 1%.</p>
      
      <p>The asset-light nature of SaaS businesses requires enhanced focus on management quality, market positioning, and competitive moats in credit decisions.</p>
      
      <h3>Market Opportunity</h3>
      <p>The SaaS lending market has grown to $12 billion annually, with private credit capturing increasing share from traditional banks lacking specialized expertise. Successful managers report 200-300 basis points higher spreads compared to traditional industries.</p>
      
      <p>Growth capital financing for SaaS companies represents a particular opportunity, combining moderate leverage with strong growth prospects and exit potential.</p>
    `
  },
  {
    id: '5',
    category: 'Healthcare Finance',
    title: 'Healthcare Real Estate Debt Gains Institutional Favor',
    excerpt: 'Medical office and senior housing debt provides defensive characteristics with demographic tailwinds.',
    author: 'David Kim',
    publishedAt: 'Jan 12, 2024',
    readTime: '5 min read',
    badgeColor: 'bg-green-500/20 text-green-300',
    image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
    heroImage: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
    content: `
      <p>Healthcare real estate debt has emerged as a favored allocation among institutional investors seeking defensive characteristics and demographic-driven growth in an uncertain economic environment.</p>
      
      <h3>Sector Fundamentals</h3>
      <p>Medical office buildings and senior housing properties benefit from aging demographics, with the 65+ population growing 3.2% annually through 2030. These properties typically feature long-term leases with healthcare operators and strong location barriers to entry.</p>
      
      <p>Occupancy rates for quality healthcare real estate remain elevated at 92-95%, providing stable cash flows for debt investors even during economic downturns.</p>
      
      <h3>Credit Profile</h3>
      <p>Healthcare real estate debt offers attractive risk-adjusted returns with gross yields averaging 8-11% depending on property type and leverage. Medical office properties anchored by hospital systems provide particularly stable cash flows.</p>
      
      <p>Senior housing represents higher yields (11-14%) but requires specialized underwriting of operator quality, local market dynamics, and regulatory environment.</p>
      
      <h3>ESG Alignment</h3>
      <p>Healthcare real estate financing aligns with institutional ESG objectives by supporting critical community infrastructure. Many properties incorporate sustainability features and serve essential social needs.</p>
      
      <p>The defensive nature and social impact of healthcare real estate make it an attractive allocation for pension funds and insurance companies with long-term liability profiles.</p>
    `
  },
  {
    id: '6',
    category: 'Market Analysis',
    title: 'Private Credit Secondary Markets Show Growing Liquidity',
    excerpt: 'Institutional demand for private credit secondaries reaches $15 billion as asset class matures.',
    author: 'Robert Johnson',
    publishedAt: 'Jan 16, 2024',
    readTime: '4 min read',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    heroImage: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e',
    content: `
      <p>The private credit secondary market has reached unprecedented scale with $15 billion in transaction volume in 2023, providing new liquidity options for institutional investors seeking portfolio optimization.</p>
      
      <h3>Market Development</h3>
      <p>Secondary transactions now occur across the credit spectrum, from direct lending fund interests to individual loan assets. Pricing has become more efficient with dedicated secondary teams at major asset managers providing market making capabilities.</p>
      
      <p>Institutional sellers increasingly use secondaries for portfolio rebalancing rather than distressed exits, contributing to more stable pricing and transaction flow.</p>
      
      <h3>Buyer Dynamics</h3>
      <p>Secondary buyers include traditional private equity funds, specialized secondary managers, and increasingly, pension funds seeking direct exposure to seasoned portfolios. Pricing typically ranges from 85-95% of net asset value depending on vintage and manager quality.</p>
      
      <p>The maturation of secondary markets provides institutional investors with enhanced liquidity management tools while maintaining exposure to private credit returns.</p>
      
      <h3>Implications</h3>
      <p>Growing secondary liquidity reduces the illiquidity premium required by institutional investors, potentially lowering overall cost of capital for private credit strategies while maintaining return profiles.</p>
      
      <p>We expect secondary market growth to accelerate as institutional allocations mature and regulatory frameworks evolve to accommodate private market liquidity solutions.</p>
    `
  }
];

const categories = [
  { name: 'All', icon: Newspaper },
  { name: 'Credit Analysis', icon: TrendingUp },
  { name: 'Market Trends', icon: Target },
  { name: 'Regulatory Impact', icon: Briefcase },
  { name: 'Technology Sector', icon: Users },
  { name: 'Healthcare Finance', icon: FileText },
  { name: 'Market Analysis', icon: Newspaper }
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
              Credit Market
              <span className="block bg-gradient-text bg-clip-text text-transparent">
                Analysis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-platinum mb-12 leading-relaxed">
              Deep insights into private debt markets, credit strategies, and industry trends 
              shaping the institutional investing landscape.
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