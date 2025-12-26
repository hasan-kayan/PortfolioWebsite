import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  content: string;
  image: string;
  url?: string;
  tags?: string[];
}

const BlogCard = ({ title, content, image, url, tags }: BlogCardProps) => {
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
          src={image || "/images/blog-fallback.png"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            // Fallback if image fails to load
            (e.target as HTMLImageElement).src = "/images/blog-fallback.png";
          }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{content}</p>
        
        {tags && tags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors self-end mt-auto"
            aria-label={`Read ${title} article`}
          >
            <span>Read Article</span>
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;