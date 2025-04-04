import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import { FaMedium } from "react-icons/fa";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_BLOG_URL + "/get-all-blogs")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-gray-900">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <Skeleton variant="rectangular" width="100%" height={180} />
                <CardContent>
                  <Skeleton variant="text" width="80%" />
                </CardContent>
                <CardActions>
                  <Skeleton variant="rectangular" width={100} height={30} />
                </CardActions>
              </Card>
            ))
          : blogs.map((blog) => {
              const firstImage = blog.images?.length > 0 ? blog.images[0] : "https://via.placeholder.com/345";

              return (
                <motion.div
                  key={blog._id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                >
                  <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: 3, backgroundColor: "#fff" }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={firstImage}
                      alt={blog.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" sx={{ color: "#1e1e1e" }}>
                        {blog.title}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Button
                        size="small"
                        component={Link}
                        to={`/blog/${blog._id}`}
                        variant="outlined"
                        color="primary"
                      >
                        Read More
                      </Button>
                      {blog.url && (
                        <a
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-black"
                        >
                          <FaMedium size={22} />
                        </a>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              );
            })}
      </div>
    </div>
  );
};

export default BlogList;
