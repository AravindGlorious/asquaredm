import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about A Square Digital Marketing, a UK-based performance-driven digital marketing agency specializing in SEO, PPC, and measurable growth strategies."
        canonical="https://asquaredigitalmarketing.com/about"
      />
      <Header />
      
      <section className="py-16 xl:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">About A Square Digital Marketing</h1>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for data-driven digital marketing and sustainable business growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl xl:text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Square Digital Marketing is a UK-based performance-driven agency that combines the power of SEO, PPC, and content marketing to drive measurable growth for businesses across the United Kingdom.
                </p>
                <p>
                  We understand that every pound invested in marketing should deliver tangible returns. That's why we focus on data-driven strategies, transparent reporting, and continuous optimization to ensure your marketing budget works harder for you.
                </p>
                <p>
                  Our team of experienced digital marketers, SEO specialists, and PPC experts work collaboratively to create integrated campaigns that not only increase visibility but also drive qualified leads and conversions.
                </p>
                <p>
                  Whether you're a small business looking to establish your online presence or an established brand seeking to scale, we have the expertise and proven strategies to help you achieve your goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  To deliver measurable ROI and predictable growth to UK businesses through data-driven marketing strategies that combine technical excellence with creative innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  To be the trusted growth partner for ambitious UK brands, recognized for our commitment to transparency, results, and long-term client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, transparency, and proven results to deliver exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Proven Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Years of experience delivering successful campaigns across diverse industries
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Data-Driven Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every decision backed by analytics and performance metrics
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personal account management and responsive communication
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Full Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear reporting and complete visibility into campaign performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
