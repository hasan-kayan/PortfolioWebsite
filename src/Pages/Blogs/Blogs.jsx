import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BLOG_URL + "/get-all-blogs")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-stone-50">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Card key={blog._id} sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.preview || blog.content.substring(0, 100)}...
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/blog/${blog._id}`} color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
