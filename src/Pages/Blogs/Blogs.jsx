import React, { useEffect, useState } from "react";
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
    fetch(`${import.meta.env.VITE_BLOG_URL}/get-all-blogs`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  const renderSkeleton = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <Card
        key={index}
        sx={{
          maxWidth: 345,
          height: 380,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={160} />
        <CardContent>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="95%" />
        </CardContent>
        <CardActions>
          <Skeleton variant="rectangular" width={100} height={30} />
        </CardActions>
      </Card>
    ));

  const renderBlogs = () =>
    blogs.map((blog) => {
      const firstImage =
        blog.images?.length > 0 ? blog.images[0] : "https://via.placeholder.com/345";

      const contentSnippet = blog.content?.slice(0, 120) || ""; // Adjust snippet length as needed

      return (
        <motion.div
          key={blog._id}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
        >
          <Card
            sx={{
              maxWidth: 345,
              height: 380,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 4,
              borderRadius: 3,
              backgroundColor: "#fff",
            }}
          >
            <CardMedia
              component="img"
              image={firstImage}
              alt={blog.title}
              sx={{ height: 160, objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "#1e1e1e",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 1,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {contentSnippet}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                size="small"
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
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
    });

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5 text-gray-900">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? renderSkeleton() : renderBlogs()}
      </div>
    </div>
  );
};

export default BlogList;
