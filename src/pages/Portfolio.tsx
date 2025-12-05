import React from 'react';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Growth Campaign',
      client: 'UK Fashion Retailer',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/c68f0821-f96f-412b-8d88-6d2899eab7dd.jpg',
      description: 'Comprehensive SEO and PPC strategy for a growing online fashion retailer',
      services: ['SEO', 'PPC', 'Content Marketing'],
      results: [
        '250% increase in organic traffic',
        '180% ROI on ad spend',
        '45% reduction in cost per acquisition'
      ]
    },
    {
      title: 'Local SEO Success',
      client: 'Professional Services Firm',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/deba1fc8-0d00-481b-8f78-c8f505e7e61c.jpg',
      description: 'Local SEO optimization and Google Business Profile management',
      services: ['Local SEO', 'Content Marketing'],
      results: [
        '400% increase in local search visibility',
        '85% more phone inquiries',
        'Top 3 rankings for 15 local keywords'
      ]
    },
    {
      title: 'Performance Marketing Campaign',
      client: 'SaaS Technology Company',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/477177e6-89ed-4381-99e5-9586adcd19d7.jpg',
      description: 'Multi-channel performance marketing with advanced analytics',
      services: ['Performance Marketing', 'PPC', 'CRO'],
      results: [
        '320% increase in qualified leads',
        '65% improvement in conversion rate',
        '£150K+ in new revenue generated'
      ]
    },
    {
      title: 'Corporate Website Redesign',
      client: 'Financial Services Provider',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ff051693-24cd-4cc1-bcba-ffc8cca1e961.jpg',
      description: 'Complete website redesign with SEO optimization and content strategy',
      services: ['SEO', 'Content Marketing', 'CRO'],
      results: [
        '175% increase in organic traffic',
        '90% improvement in page load speed',
        '55% increase in form submissions'
      ]
    },
    {
      title: 'Lead Generation Campaign',
      client: 'B2B Manufacturing Company',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/ec0d6dcf-e23b-4577-a9b8-92cdf09f7c42.jpg',
      description: 'Targeted lead generation campaign with landing page optimization',
      services: ['Lead Generation', 'PPC', 'CRO'],
      results: [
        '500+ qualified leads generated',
        '42% conversion rate on landing pages',
        '£250K+ pipeline value created'
      ]
    },
    {
      title: 'Mobile App Launch',
      client: 'Health & Wellness Startup',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/b037d855-e804-4fa4-a910-7f5262ae210b.jpg',
      description: 'Full-funnel marketing strategy for mobile app launch',
      services: ['Performance Marketing', 'Social Media', 'Content Marketing'],
      results: [
        '10,000+ app downloads in first month',
        '35% lower cost per install than target',
        '4.8 star average app rating'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Portfolio & Case Studies"
        description="Explore our successful digital marketing campaigns and case studies. See real results from SEO, PPC, and performance marketing projects for UK businesses."
        canonical="https://asquaredigitalmarketing.com/portfolio"
      />
      <Header />
      
      <section className="py-16 xl:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real campaigns. Explore our case studies and see how we've helped UK businesses achieve their growth goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    <span className="font-medium text-foreground">{project.client}</span>
                    <br />
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Results:</h4>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <ExternalLink className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help your business grow with proven digital marketing strategies
          </p>
          <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-md font-medium hover:bg-background/90 transition-colors">
            Start Your Success Story
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
