import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { getApiUrl } from '../config/api.config';

interface Blog {
  _id?: string;
  id?: string;
  title: string;
  content: string;
  tags?: string[];
  url?: string;
  images?: string[];
  videos?: string[];
}

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(getApiUrl('api/blogs/get-all-blogs'))
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log('Blogs loaded:', data);
        setBlogs(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError(`Failed to load blogs: ${err.message}. Make sure the backend server is running.`);
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts about technology and development.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 text-indigo-500 animate-spin" />
            <p className="mt-4 text-xl text-gray-300">Loading blogs...</p>
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
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No blogs found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard
                key={blog._id || blog.id || index}
                title={blog.title}
                content={blog.content}
                tags={blog.tags}
                url={blog.url}
                image={blog.images?.[0]?.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/') || "/images/blog-fallback.png"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;