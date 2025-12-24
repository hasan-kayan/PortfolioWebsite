import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

interface Project {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  images?: string[];
  videos?: string[];
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/projects/get-all-projects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Projects loaded:', data);
        // Log image URLs for debugging
        data.forEach((project: Project) => {
          console.log(`Project "${project.title}" images:`, project.images);
        });
        setProjects(Array.isArray(data) ? data : []);
      }) 
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError(`Failed to load projects: ${err.message}. Make sure the backend server is running on port 5000.`);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and contributions.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 text-indigo-500 animate-spin" />
            <p className="mt-4 text-xl text-gray-300">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="bg-red-900/20 border border-red-700 text-red-100 rounded-lg p-4 text-center">
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-800 rounded transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No projects found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              // Process image URL - handle GitHub, Google Cloud Storage, and direct URLs
              let imageUrl = "/images/fallback.png";
              
              if (project.images && project.images.length > 0) {
                const rawImageUrl = project.images[0];
                console.log(`🖼️ [FRONTEND] Processing image URL for "${project.title}":`, rawImageUrl);
                
                // GitHub download_url is already in raw.githubusercontent.com format, use as is
                if (rawImageUrl.includes('raw.githubusercontent.com')) {
                  imageUrl = rawImageUrl;
                  console.log(`✅ [FRONTEND] Using GitHub raw URL:`, imageUrl);
                }
                // If it's a regular GitHub URL, convert to raw format
                else if (rawImageUrl.includes('github.com')) {
                  imageUrl = rawImageUrl
                    .replace('github.com', 'raw.githubusercontent.com')
                    .replace('/blob/', '/');
                  console.log(`✅ [FRONTEND] Converted GitHub URL to raw:`, imageUrl);
                } 
                // If it's a Google Cloud Storage URL, use as is
                else if (rawImageUrl.includes('storage.googleapis.com') || rawImageUrl.includes('googleapis.com')) {
                  imageUrl = rawImageUrl;
                  console.log(`✅ [FRONTEND] Using Google Cloud Storage URL:`, imageUrl);
                }
                // If it's already a direct URL, use as is
                else if (rawImageUrl.startsWith('http://') || rawImageUrl.startsWith('https://')) {
                  imageUrl = rawImageUrl;
                  console.log(`✅ [FRONTEND] Using direct URL:`, imageUrl);
                }
                // Otherwise, assume it's a valid URL
                else {
                  imageUrl = rawImageUrl;
                  console.log(`⚠️ [FRONTEND] Using URL as-is (may need validation):`, imageUrl);
                }
              } else {
                console.log(`⚠️ [FRONTEND] No images found for "${project.title}"`);
              }
              
              return (
                <ProjectCard
                  key={project._id || project.id || index}
                  title={project.title}
                  description={project.description}
                  tech={project.technologies.join(", ")}
                  image={imageUrl}
                  link={project.demoLink}
                  githubLink={project.githubLink}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;