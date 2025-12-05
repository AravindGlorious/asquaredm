import React from 'react';
import { Star, Quote } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'TechStart Solutions',
      role: 'Marketing Director',
      rating: 5,
      text: 'A Square Digital Marketing transformed our online presence. Within 6 months, we saw a 250% increase in organic traffic and our lead quality improved dramatically. Their team is professional, responsive, and truly understands the UK market.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
    },
    {
      name: 'James Thompson',
      company: 'Thompson & Associates',
      role: 'Managing Partner',
      rating: 5,
      text: 'Outstanding results from the local SEO campaign. We now dominate local search results in our area, and phone inquiries have increased by 85%. The ROI has been exceptional, and the team provides excellent support throughout.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    {
      name: 'Emma Richardson',
      company: 'Boutique Fashion Ltd',
      role: 'E-Commerce Manager',
      rating: 5,
      text: 'The PPC campaigns managed by A Square have been incredibly effective. Our ROAS improved by 180%, and the cost per acquisition dropped by 45%. They really know how to optimize ad spend for maximum return.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    },
    {
      name: 'David Chen',
      company: 'InnovateTech',
      role: 'CEO',
      rating: 5,
      text: 'Working with A Square has been a game-changer for our SaaS business. Their performance marketing approach generated over 320% more qualified leads, and the conversion rate optimization work has been outstanding. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Lisa Anderson',
      company: 'Anderson Financial Services',
      role: 'Operations Director',
      rating: 5,
      text: 'The content marketing strategy developed by A Square has positioned us as thought leaders in our industry. Website traffic is up 175%, and we\'re seeing a significant increase in high-value client inquiries. Excellent work!',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80'
    },
    {
      name: 'Michael Roberts',
      company: 'Roberts Manufacturing',
      role: 'Sales Director',
      rating: 5,
      text: 'The lead generation campaign exceeded all expectations. We generated over 500 qualified leads in 3 months, with a 42% conversion rate on landing pages. The team\'s expertise in B2B marketing is evident in every aspect of their work.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Client Testimonials & Reviews"
        description="Read what our clients say about A Square Digital Marketing. Real reviews from UK businesses who have achieved exceptional results with our digital marketing services."
        canonical="https://asquaredigitalmarketing.com/testimonials"
      />
      <Header />
      
      <section className="py-16 xl:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with A Square Digital Marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground pl-6 italic">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl xl:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same level of service and results that our clients rave about
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Testimonials;
