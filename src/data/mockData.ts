import { BlogPost, Project, Book, Course, Testimonial } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends in web development and how they will shape the industry.',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
  },
  // Add more blog posts...
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com',
  },
  // Add more projects...
];

export const books: Book[] = [
  {
    id: '1',
    title: 'Modern Web Development',
    description: 'A comprehensive guide to building modern web applications',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=1000',
    purchaseLink: 'https://amazon.com',
    price: '$29.99',
  },
  // Add more books...
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    description: 'Master advanced React patterns and best practices',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    price: '$99.99',
    enrollmentLink: 'https://courses.example.com',
    duration: '8 weeks',
  },
  // Add more courses...
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    position: 'CTO',
    company: 'Tech Solutions Inc.',
    content: 'Working with Suman was an incredible experience. His expertise and dedication transformed our project.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000',
  },
  // Add more testimonials...
];