# Nicholas Wilkie Portfolio

Interactive portfolio website showcasing creative work across multiple disciplines.

## Features

- **Animated Landing Page** - Tile-based category selection with explosion transitions
- **Markdown Projects** - Write project articles in Markdown with rich media support
- **Media Components** - Photo galleries, video/audio players, website previews
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Cloudflare Ready** - Deploy directly to Cloudflare Pages

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Markdown (remark-gfm, rehype-raw)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AudioPlayer.tsx
│   ├── CategoryTile.tsx
│   ├── ContactForm.tsx
│   ├── Headshot.tsx
│   ├── Navigation.tsx
│   ├── PhotoGallery.tsx
│   ├── ProjectCard.tsx
│   ├── VideoPlayer.tsx
│   └── WebsitePreview.tsx
├── data/
│   └── projects/       # Markdown project files (1.md, 2.md, etc.)
├── pages/
│   ├── AboutPage.tsx
│   ├── CategoryPage.tsx
│   ├── HomePage.tsx
│   └── LandingPage.tsx
├── App.tsx
├── data.ts             # Project/category data imports
├── main.tsx
└── styles/
    └── index.css       # Tailwind + custom styles
```

## Writing Projects

Create markdown files in `src/data/projects/`:

```markdown
# Project Title

Description here.

![Image Alt](https://example.com/image.jpg)

## Features

- Feature one
- Feature two

<audio>https://example.com/audio.mp3</audio>

[Link Text](https://example.com)
```

Then reference in `data.ts`:

```typescript
import project1 from './data/projects/1.md?raw';

export const projects: Project[] = [
  {
    id: "1",
    title: "Project Title",
    category: "software-development",
    thumbnail: "https://picsum.photos/seed/1/600/400",
    date: "2024",
    content: project1,
  },
];
```

## Categories

| ID | Name | Color |
|----|------|-------|
| `software-development` | Software Development | #6366f1 |
| `engineering` | Engineering | #ec4899 |
| `narration` | Audio Book Narration | #8b5cf6 |

## Deployment

Build and deploy to Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy dist
```

Or connect your GitHub repository to Cloudflare Pages for automatic deployments.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
