import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, projects } from '../data';
import ProjectCard from '../components/ProjectCard';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);
  const categoryProjects = projects.filter((p) => p.category === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-400">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
          <span className="text-sm font-medium" style={{ color: category.color }}>
            {category.name}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
        <p className="text-xl text-gray-400 max-w-2xl">{category.description}</p>
      </motion.div>

      {categoryProjects.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto text-center py-20"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-surface flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">No projects yet</h2>
          <p className="text-gray-500">Projects for this category will appear here soon.</p>
        </motion.div>
      )}
    </div>
  );
}