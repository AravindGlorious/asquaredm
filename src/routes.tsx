import type { ReactNode } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'About',
    path: '/about',
    element: <About />
  },
  {
    name: 'Services',
    path: '/services',
    element: <Services />
  },
  {
    name: 'Pricing',
    path: '/pricing',
    element: <Pricing />
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    name: 'Testimonials',
    path: '/testimonials',
    element: <Testimonials />
  },
  {
    name: 'Blog',
    path: '/blog',
    element: <Blog />
  },
  {
    name: 'Blog Post',
    path: '/blog/:slug',
    element: <BlogPost />,
    visible: false
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />
  },
  {
    name: 'Privacy',
    path: '/privacy',
    element: <Privacy />,
    visible: false
  },
  {
    name: 'Terms',
    path: '/terms',
    element: <Terms />
  }
];

export default routes;
