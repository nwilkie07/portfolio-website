import project1 from './data/projects/1.md?raw';
import project2 from './data/projects/2.md?raw';
import project3 from './data/projects/3.md?raw';
import project4 from './data/projects/4.md?raw';
import project5 from './data/projects/5.md?raw';
import project6 from './data/projects/6.md?raw';

export interface MediaItem {
  type: "photo" | "video" | "audio" | "website";
  url: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  date: string;
  content: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: "software-development",
    name: "Software Development",
    description: "Full-stack web applications and interactive experiences",
    icon: "code",
    color: "#6366f1",
  },
  {
    id: "engineering",
    name: "Engineering",
    description: "Project management and professional work.",
    icon: "video",
    color: "#ec4899",
  },
  {
    id: "narration",
    name: "Audio Book Narration",
    description: "Professional voice recording and audio editing",
    icon: "palette",
    color: "#8b5cf6",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    category: "software-development",
    thumbnail: "https://picsum.photos/seed/project1/600/400",
    date: "2024",
    content: project1,
  },
  {
    id: "2",
    title: "Brand Identity System",
    category: "software-development",
    thumbnail: "https://picsum.photos/seed/project2/600/400",
    date: "2024",
    content: project2,
  },
  {
    id: "3",
    title: "Documentary Short Film",
    category: "engineering",
    thumbnail: "https://picsum.photos/seed/project3/600/400",
    date: "2023",
    content: project3,
  },
  {
    id: "4",
    title: "Tech Podcast Series",
    category: "narration",
    thumbnail: "https://picsum.photos/seed/project4/600/400",
    date: "2024",
    content: project4,
  },
  {
    id: "5",
    title: "Urban Landscape Series",
    category: "engineering",
    thumbnail: "https://picsum.photos/seed/project5/600/400",
    date: "2023",
    content: project5,
  },
  {
    id: "6",
    title: "Mobile App Development",
    category: "software-development",
    thumbnail: "https://picsum.photos/seed/project6/600/400",
    date: "2024",
    content: project6,
  },
];