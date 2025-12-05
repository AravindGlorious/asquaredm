# A Square Digital Marketing - Deployment & Customization Guide

## 📋 Overview

This is a production-ready, premium-quality digital marketing website for A Square Digital Marketing, a UK-based digital marketing agency. The website is built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or compatible runtime
- npm or pnpm package manager

### Installation
```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with one click

### Netlify
1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Static Hosting (AWS S3, Cloudflare Pages, etc.)
```bash
# Build the production version
npm run build

# The dist/ folder contains your static files
# Upload the contents of dist/ to your hosting provider
```

## 🎨 Customization Guide

### 1. Branding & Colors

**Update Company Information:**
- Edit `src/components/common/Header.tsx` - Company name in navigation
- Edit `src/components/common/Footer.tsx` - Contact details and social links
- Edit all SEO canonical URLs to match your domain

**Color Scheme:**
The design system uses a professional blue/purple gradient theme. To customize:
- Edit `src/index.css` - Update CSS variables in `:root` and `.dark` sections
- Primary color: `--primary` (currently blue: 243 75% 59%)
- Secondary color: `--secondary` (currently purple: 262 83% 58%)

### 2. Content Updates

**Services:**
- Edit `src/pages/Services.tsx` - Update the 8 core services
- Edit `src/pages/Home.tsx` - Update services overview section

**Pricing:**
- Edit `src/pages/Pricing.tsx` - Update pricing tiers and features
- Currency toggle is already implemented (GBP/USD)

**Portfolio:**
- Edit `src/pages/Portfolio.tsx` - Update project case studies
- Replace placeholder images with your actual project images

**Testimonials:**
- Edit `src/pages/Testimonials.tsx` - Update client testimonials
- Replace placeholder profile images

**Blog:**
- Edit `src/pages/Blog.tsx` - Add/remove blog posts
- Create new blog post pages following the pattern in `src/pages/BlogPost.tsx`

### 3. SEO Optimization

**Meta Tags:**
Each page uses the SEO component. Update:
- `title` - Page title
- `description` - Meta description
- `canonical` - Canonical URL (update domain)
- `structuredData` - JSON-LD structured data

**Sitemap:**
- Edit `public/sitemap.xml` - Update URLs to match your domain
- Add new pages as you create them

**Robots.txt:**
- Edit `public/robots.txt` - Update sitemap URL

### 4. Contact Form

The contact form currently shows a success toast. To integrate with a backend:

**Option 1: Email Service (Formspree, EmailJS)**
```typescript
// In src/pages/Contact.tsx, update handleSubmit:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      toast({ title: "Message Sent!", description: "We'll get back to you soon." });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  } catch (error) {
    toast({ title: "Error", description: "Failed to send message.", variant: "destructive" });
  } finally {
    setIsSubmitting(false);
  }
};
```

**Option 2: Backend API**
Replace the setTimeout with an actual API call to your backend.

### 5. Images

**Hero Images:**
- Home page hero: Update background image URL in `src/pages/Home.tsx`
- Other hero sections: Update in respective page files

**Portfolio Images:**
Current images are from the image search service. Replace with your actual project images.

**Favicon:**
- Replace `public/favicon.png` with your company logo
- Update `index.html` favicon reference if needed

### 6. Social Media Links

Update social media URLs in:
- `src/components/common/Footer.tsx` - Footer social icons
- `src/pages/Home.tsx` - Structured data sameAs array

### 7. Google Analytics

Add Google Analytics to `index.html`:
```html
<head>
  <!-- ... other tags ... -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

### 8. UK-Specific Considerations

**Language & Spelling:**
- All content uses UK English spelling (e.g., "optimise", "organisation")
- Currency defaults to GBP with USD toggle
- Location references are UK-focused

**Local SEO:**
- Update structured data with actual UK address
- Add Google Business Profile integration if needed
- Update local keywords in meta tags

## 🔧 Technical Details

### Tech Stack
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router v6
- **SEO:** react-helmet-async
- **Build Tool:** Vite

### Project Structure
```
src/
├── components/
│   ├── common/          # Shared components (Header, Footer, SEO)
│   └── ui/              # shadcn/ui components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── index.css            # Global styles & design system
├── routes.tsx           # Route configuration
└── App.tsx              # Main app component

public/
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Robots file
└── favicon.png          # Site favicon
```

### Key Features
- ✅ Fully responsive (mobile-first design)
- ✅ SEO optimized with meta tags and structured data
- ✅ Accessible (ARIA attributes)
- ✅ Fast loading (optimized images, lazy loading)
- ✅ Dark mode support (via Tailwind)
- ✅ Currency toggle (GBP/USD)
- ✅ Contact form with validation
- ✅ Blog with sample post
- ✅ Portfolio case studies
- ✅ Client testimonials

## 📝 SEO Checklist

Before going live:
- [ ] Update all canonical URLs to your domain
- [ ] Replace placeholder images with optimized versions
- [ ] Update sitemap.xml with your domain
- [ ] Update robots.txt with your domain
- [ ] Add Google Analytics tracking code
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Test all pages with Google's Rich Results Test
- [ ] Verify structured data with Schema.org validator
- [ ] Test mobile responsiveness
- [ ] Check page load speed with PageSpeed Insights
- [ ] Set up 301 redirects if migrating from old site

## 🎯 Performance Tips

1. **Image Optimization:**
   - Use WebP format for images
   - Implement responsive images with srcset
   - Lazy load images below the fold

2. **Code Splitting:**
   - Vite automatically handles code splitting
   - Consider lazy loading routes if needed

3. **Caching:**
   - Configure proper cache headers on your hosting
   - Use CDN for static assets

4. **Monitoring:**
   - Set up uptime monitoring
   - Monitor Core Web Vitals
   - Track conversion rates

## 🐛 Troubleshooting

**Build Errors:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist .vite`

**Routing Issues:**
- Ensure your hosting supports SPA routing
- Configure redirects to index.html for all routes

**SEO Not Working:**
- Verify meta tags are rendering (view page source)
- Check robots.txt isn't blocking crawlers
- Ensure sitemap is accessible

## 📞 Support

For questions or issues with this website:
- Email: info@asquaredigitalmarketing.com
- Review the code comments in each file
- Check the TODO.md for implementation notes

## 📄 License

This website is proprietary to A Square Digital Marketing.

---

**Built with ❤️ for A Square Digital Marketing**
