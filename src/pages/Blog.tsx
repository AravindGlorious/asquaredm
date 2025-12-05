import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Why SEO and Performance Marketing Matter for UK Small Businesses',
      slug: 'why-seo-performance-marketing-matter-uk-small-businesses',
      excerpt: 'Discover how combining SEO and performance marketing can transform your small business growth strategy in the competitive UK market.',
      category: 'SEO',
      date: '2025-01-15',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'Google Ads Best Practices for UK Businesses in 2025',
      slug: 'google-ads-best-practices-uk-2025',
      excerpt: 'Learn the latest Google Ads strategies and best practices to maximize your ROI and stay ahead of the competition.',
      category: 'PPC',
      date: '2025-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80'
    },
    {
      title: 'Local SEO: How to Dominate Search Results in Your Area',
      slug: 'local-seo-dominate-search-results',
      excerpt: 'A comprehensive guide to local SEO strategies that will help your business appear at the top of local search results.',
      category: 'Local SEO',
      date: '2025-01-05',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      title: 'Content Marketing Strategies That Drive Conversions',
      slug: 'content-marketing-strategies-drive-conversions',
      excerpt: 'Explore proven content marketing tactics that engage audiences and convert readers into customers.',
      category: 'Content Marketing',
      date: '2024-12-28',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
    },
    {
      title: 'Understanding Conversion Rate Optimization: A Beginner\'s Guide',
      slug: 'understanding-conversion-rate-optimization',
      excerpt: 'Learn the fundamentals of CRO and how to turn more website visitors into paying customers.',
      category: 'CRO',
      date: '2024-12-20',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      title: 'Social Media Marketing Trends for UK Businesses',
      slug: 'social-media-marketing-trends-uk',
      excerpt: 'Stay ahead of the curve with the latest social media marketing trends and strategies for UK businesses.',
      category: 'Social Media',
      date: '2024-12-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
    }
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Blog"
        description="Expert insights, tips, and strategies for SEO, PPC, performance marketing, and digital growth. Stay updated with the latest trends in UK digital marketing."
        canonical="https://asquaredigitalmarketing.com/blog"
      />
      <Header />
      
      <section className="py-16 xl:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl xl:text-5xl font-bold mb-6">Digital Marketing Blog</h1>
            <p className="text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, strategies, and tips to help you grow your business online
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary hover:underline inline-flex items-center font-medium"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
