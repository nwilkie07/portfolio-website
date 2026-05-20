import { motion } from 'framer-motion';
import type { Project } from '../data';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import VideoPlayer from './VideoPlayer';
import AudioPlayer from './AudioPlayer';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -4 }}
        className="bg-surface rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-xs text-primary">{project.date}</span>
            <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-400 text-sm">Click to read more</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        className={`fixed inset-0 z-50 ${isExpanded ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/80" onClick={() => setIsExpanded(false)} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: isExpanded ? 1 : 0.9, opacity: isExpanded ? 1 : 0 }}
          className="absolute inset-4 md:inset-8 lg:inset-16 bg-surface rounded-xl overflow-auto"
        >
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6 md:p-8 overflow-auto max-h-full">
            <span className="text-primary text-sm">{project.date}</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">{project.title}</h2>

            <div className="mt-6 markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  video: ({ src }) => src ? <VideoPlayer item={{ type: 'video', url: src }} /> : null,
                  audio: ({ src }) => src ? <AudioPlayer item={{ type: 'audio', url: src }} /> : null,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) => (
                    <div className="my-4 rounded-lg overflow-hidden">
                      <img src={src} alt={alt || ''} className="w-full h-auto" loading="lazy" />
                    </div>
                  ),
                  h1: ({ children }) => <h1 className="text-2xl font-bold mt-6 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-300 my-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside my-4 space-y-2 text-gray-300">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside my-4 space-y-2 text-gray-300">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-300">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 my-4 text-gray-400 italic">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className;
                    if (isInline) {
                      return <code className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">{children}</code>;
                    }
                    return (
                      <pre className="bg-background p-4 rounded-lg my-4 overflow-x-auto">
                        <code className="text-sm text-gray-300">{children}</code>
                      </pre>
                    );
                  },
                  pre: ({ children }) => <pre className="bg-background p-4 rounded-lg my-4 overflow-x-auto">{children}</pre>,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-4">
                      <table className="min-w-full border border-white/10 rounded-lg">{children}</table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-white/10 px-4 py-2 text-left bg-surface">{children}</th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-white/10 px-4 py-2">{children}</td>
                  ),
                  hr: () => <hr className="border-white/10 my-8" />,
                  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                }}
              >
                {project.content}
              </ReactMarkdown>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}