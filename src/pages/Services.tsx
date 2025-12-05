import React from 'react';
import { Search, MousePointerClick, TrendingUp, FileText, Users, Share2, BarChart3, MapPin, Check } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-12 w-12" />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your organic visibility and drive qualified traffic with comprehensive SEO strategies tailored for UK businesses.',
      features: [
        'Technical SEO audits and optimization',
        'Keyword research and content strategy',
        'On-page and off-page optimization',
        'Link building and authority development',
        'Local SEO for UK markets',
        'Monthly reporting and analytics'
      ]
    },
    {
      icon: <MousePointerClick className="h-12 w-12" />,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Maximise ROI with expertly managed Google Ads and paid search campaigns that convert clicks into customers.',
      features: [
        'Google Ads campaign management',
        'Bing Ads optimization',
        'Shopping ads for e-commerce',
        'Display and remarketing campaigns',
        'A/B testing and optimization',
        'Conversion tracking and reporting'
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Performance Marketing',
      description: 'Results-focused campaigns across multiple channels, optimised for measurable growth and predictable returns.',
      features: [
        'Multi-channel campaign strategy',
        'Performance tracking and attribution',
        'ROI-focused optimization',
        'Conversion funnel analysis',
        'Budget allocation and scaling',
        'Real-time performance dashboards'
      ]
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that builds authority, trust, and drives conversions.',
      features: [
        'Content strategy development',
        'Blog writing and optimization',
        'Landing page copywriting',
        'Email marketing campaigns',
        'Video content planning',
        'Content calendar management'
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Lead Generation',
      description: 'Fill your pipeline with high-quality leads through strategic campaigns designed to attract your ideal customers.',
      features: [
        'Lead magnet creation',
        'Landing page optimization',
        'Lead nurturing campaigns',
        'CRM integration',
        'Lead scoring and qualification',
        'Multi-channel lead capture'
      ]
    },
    {
      icon: <Share2 className="h-12 w-12" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across social platforms with targeted campaigns.',
      features: [
        'Social media strategy',
        'Content creation and scheduling',
        'Community management',
        'Paid social advertising',
        'Influencer partnerships',
        'Social media analytics'
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: 'Conversion Rate Optimization (CRO) & Web Analytics',
      description: 'Turn more visitors into customers with data-driven testing and optimization strategies.',
      features: [
        'Conversion funnel analysis',
        'A/B and multivariate testing',
        'User behavior tracking',
        'Heatmap and session recording',
        'Google Analytics setup',
        'Custom dashboard creation'
      ]
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: 'Local SEO & Google Business Profile',
      description: 'Dominate local search results and attract nearby customers with optimised local SEO strategies.',
      features: [
        'Google Business Profile optimization',
        'Local citation building',
        'Review management',
        'Local keyword targeting',
        'NAP consistency audit',
        'Local link building'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Services"
        description="Comprehensive digital marketing services including SEO, PPC, performance marketing, content marketing, lead generation, and more. Tailored for UK businesses."
        canonical="https://asquaredigitalmarketing.com/services"
      />
      <Header />
      
      <section className="py-16 xl:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth, increase visibility, and deliver measurable results for your business
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <a href="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-md font-medium hover:bg-background/90 transition-colors">
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
