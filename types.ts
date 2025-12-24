import { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  path: string;
  isExternal?: boolean; // For "Play Now" links
  icon?: LucideIcon;
}

export interface GameCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage: string;
  providers: string[];
  features: string[];
}

export interface Game {
  id: string;
  title: string;
  provider: string;
  category: string;
  imageUrl: string;
  description?: string;
  rtp?: string; // e.g. "96.5%"
  volatility?: 'Low' | 'Medium' | 'High' | 'Very High';
  maxWin?: string; // e.g. "x5000"
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  winAmount: string;
  game: string;
  message: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
  readTime: string;
  tags: string[];
}
