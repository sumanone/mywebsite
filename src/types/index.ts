export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  purchaseLink: string;
  price: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  enrollmentLink: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}