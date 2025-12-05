import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const [currency, setCurrency] = useState<'GBP' | 'USD'>('GBP');

  const pricingTiers = [
    {
      name: 'Starter',
      priceGBP: '£499',
      priceUSD: '$599',
      period: 'per month',
      description: 'Perfect for small businesses starting their digital marketing journey',
      features: [
        'Basic SEO optimization',
        'Monthly reporting',
        '5 target keywords',
        'Small PPC budget management',
        'Google Analytics setup',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Growth',
      priceGBP: '£1,299',
      priceUSD: '$1,559',
      period: 'per month',
      description: 'Ideal for growing businesses ready to scale their marketing',
      features: [
        'Comprehensive SEO + PPC',
        'Content marketing (4 posts/month)',
        '20 target keywords',
        'CRO basics',
        'Bi-weekly reporting',
        'Dedicated account manager',
        'Phone & email support'
      ],
      popular: true
    },
    {
      name: 'Pro',
      priceGBP: '£2,999',
      priceUSD: '$3,599',
      period: 'per month',
      description: 'Complete solution for established businesses seeking maximum growth',
      features: [
        'Full performance marketing',
        'Multi-channel ad management',
        'Advanced analytics & reporting',
        'Unlimited keywords',
        'Weekly strategy calls',
        'Priority support',
        'Custom integrations',
        'Quarterly strategy reviews'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Transparent pricing for digital marketing services. Choose from Starter, Growth, or Pro plans tailored to your business needs. Prices in GBP and USD."
        canonical="https://asquaredigitalmarketing.com/pricing"
      />
      <Header />
      
      <section className="py-16 xl:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the plan that fits your business goals. All plans include transparent reporting and no hidden fees.
            </p>
            
            <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-lg p-1">
              <button
                onClick={() => setCurrency('GBP')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  currency === 'GBP'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                GBP (£)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  currency === 'USD'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.popular
                    ? 'border-2 border-primary shadow-xl scale-105'
                    : 'border hover:border-primary/50'
                } transition-all`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl xl:text-5xl font-bold">
                      {currency === 'GBP' ? tier.priceGBP : tier.priceUSD}
                    </span>
                    <span className="text-muted-foreground ml-2">{tier.period}</span>
                  </div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="w-full"
                    variant={tier.popular ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <a href="/contact">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? We offer bespoke packages tailored to your specific requirements.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Contact Us for Custom Pricing</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-bold mb-4">What's Included in All Plans</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Transparent Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Clear, detailed reports showing exactly where your budget goes and what results you're getting
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">No Long-Term Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Month-to-month agreements with no hidden fees or cancellation penalties
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Access to experienced digital marketers, SEO specialists, and PPC experts
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ongoing Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Continuous testing and refinement to improve performance and ROI
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

export default Pricing;
