import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  image: string;
  link?: string;
  githubLink?: string;
}

const ProjectCard = ({ title, description, tech, image, link, githubLink }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image || "/images/fallback.png"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            // Fallback if image fails to load
            (e.target as HTMLImageElement).src = "/images/fallback.png";
          }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{description}</p>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Tech Stack</span>
          <p className="text-indigo-400 text-sm mt-1">{tech}</p>
        </div>
        
        <div className="flex gap-3">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github size={16} />
              <span>Source</span>
            </a>
          )}
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
              aria-label={`View ${title} live demo`}
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;