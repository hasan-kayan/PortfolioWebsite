import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let parser = new Parser();
        let feed = await parser.parseURL('https://medium.com/feed/@hasankayan');
        console.log("feed", feed.items)
        setBlogs(feed.items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>My Medium Blogs</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              {blog.title}
            </a>
            <p>{blog.contentSnippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
