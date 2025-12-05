import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MousePointerClick, TrendingUp, FileText, Users, Share2, BarChart3, MapPin } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your organic visibility and drive qualified traffic with data-driven SEO strategies tailored for UK businesses.',
    },
    {
      icon: <MousePointerClick className="h-8 w-8" />,
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'Maximise ROI with expertly managed Google Ads and paid search campaigns that convert clicks into customers.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Performance Marketing',
      description: 'Results-focused campaigns across multiple channels, optimised for measurable growth and predictable returns.',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that builds authority, trust, and drives conversions.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Lead Generation',
      description: 'Fill your pipeline with high-quality leads through strategic campaigns designed to attract your ideal customers.',
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across social platforms with targeted campaigns.',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Turn more visitors into customers with data-driven testing and optimization strategies.',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Local SEO & Google Business Profile',
      description: 'Dominate local search results and attract nearby customers with optimised local SEO strategies.',
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "A Square Digital Marketing",
    "url": "https://asquaredigitalmarketing.com",
    "logo": "https://asquaredigitalmarketing.com/logo.png",
    "description": "UK-based performance-driven digital marketing agency specializing in SEO, PPC, and performance marketing",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "email": "info@asquaredigitalmarketing.com",
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com",
      "https://facebook.com",
      "https://instagram.com"
    ]
  };

  return (
    <>
      <SEO
        title="A Square Digital Marketing — Digital Marketing Agency UK for Growth & Leads"
        description="A Square Digital Marketing — premium UK digital marketing agency focused on SEO, PPC, performance marketing, and lead generation. Get a free audit and grow online."
        canonical="https://asquaredigitalmarketing.com/"
        structuredData={structuredData}
      />
      <Header />
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="absolute inset-0 opacity-10 bg-inherit bg-cover bg-center bg-no-repeat bg-[url(https://miaoda-edit-image.s3cdn.medo.dev/80lmek4bkkjl/IMG-80oq44w4aosg.png)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl xl:text-6xl font-bold mb-6">
            <span className="gradient-text">A Square Digital Marketing</span>
            <br />
            <span className="text-foreground">Digital Marketing Agency UK for Growth & Leads</span>
          </h1>
          <p className="text-lg xl:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Performance-driven agency combining SEO, PPC and content to drive measurable growth for UK businesses
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-6">
              Get a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A Square Digital Marketing is a UK-based performance-driven agency combining SEO, PPC and content to drive measurable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver measurable ROI and predictable growth to UK businesses through data-driven marketing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the trusted growth partner for ambitious UK brands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 xl:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to drive growth and deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Link to="/services" className="text-primary hover:underline inline-flex items-center text-sm font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 xl:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl xl:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get a free digital marketing audit and discover opportunities to drive more traffic, leads, and revenue
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
