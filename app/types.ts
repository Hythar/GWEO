export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  latitude: number;
  longitude: number;
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}