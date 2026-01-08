
// Added React import to provide access to React namespace for types
import React from 'react';

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface Benefit {
  id: number;
  title: string;
  text: string;
  icon: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
}