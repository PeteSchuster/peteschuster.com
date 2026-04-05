export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A high-performance storefront built with Next.js and headless CMS, featuring server-side rendering and optimized Core Web Vitals.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    url: '#',
    github: '#',
  },
  {
    title: 'Real-Time Dashboard',
    description:
      'Interactive analytics dashboard with live data visualization, WebSocket updates, and responsive charts built for a SaaS product.',
    tags: ['React', 'D3.js', 'Node.js', 'WebSockets'],
    url: '#',
  },
  {
    title: 'Design System',
    description:
      'A comprehensive component library with theming support, accessibility built-in, and thorough documentation for a growing team.',
    tags: ['React', 'Storybook', 'CSS Variables', 'a11y'],
    github: '#',
  },
  {
    title: 'API Gateway',
    description:
      'Scalable API gateway handling authentication, rate limiting, and request routing for a microservices architecture.',
    tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    github: '#',
  },
];
