import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Chip } from "@mui/material";
import axios from "axios";
import Header from "../../../components/Header";
import axiosInstance from "../../../utils/axiosInstance"; // Import Axios instance
const API_URL = process.env.REACT_APP_API_URL;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  // Fetch Blogs on Component Mount
  useEffect(() => {
    axios
      .get(`${API_URL}/website/blog/get-all-blogs`)
      .then(response => {
        console.log("Fetched Blogs:", response.data);
        setBlogs(response.data);
      })
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);
  function generateUUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }
  
  console.log(generateUUID()); // Example Output: "3f2504e0-4f89-11d3-9a0c-0305e82c3301"

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await axiosInstance.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
  
      return response.data.url; // Assuming API returns { url: "https://example.com/image.jpg" }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null; // Handle upload error
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
  
    const id = generateUUID();
  
    // Convert images to URLs before sending
    const imageUrls = await Promise.all(images.map(uploadImage)); // Upload images and get URLs
  
    const blogData = { id, title, content, url, tags, images: imageUrls };
    console.log("Submitting Blog:", blogData);
  
    try {
      await axiosInstance.post("/website/blog/create-blog", blogData, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
  
      alert("Blog Saved Successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error saving blog:", error.response ? error.response.data : error);
      alert(`Error saving blog: ${error.response ? error.response.data.error : "Unknown error"}`);
    }
  };
    
  // Handle Blog Deletion
  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`${API_URL}/website/blog/delete-blog/${id}`);
      alert("Blog Deleted Successfully!");
      window.location.reload(); // Refresh to remove the blog
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog.");
    }
  };

  return (
    <Box m="20px">
      <Header title="Manage Blogs" subtitle="Create, update, or delete blog entries." />

      {/* Direct Form Without Formik */}
      <form onSubmit={handleSubmit}>
        <Box display="grid" gap="20px" gridTemplateColumns="repeat(4, minmax(0, 1fr))">
          <TextField fullWidth variant="filled" label="Title"
            value={title} onChange={(e) => setTitle(e.target.value)}
            sx={{ gridColumn: "span 4" }} />

          <TextField fullWidth variant="filled" label="URL"
            value={url} onChange={(e) => setUrl(e.target.value)}
            sx={{ gridColumn: "span 4" }} />

          <input type="file" accept="image/*" multiple
            onChange={(e) => setImages(Array.from(e.target.files))}
            style={{ gridColumn: "span 4" }} />

          <TextField fullWidth variant="filled" label="Content" multiline rows={4}
            value={content} onChange={(e) => setContent(e.target.value)}
            sx={{ gridColumn: "span 4" }} />

          {/* Tags Input */}
          <Box display="flex" flexWrap="wrap" gap="10px" sx={{ gridColumn: "span 4" }}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} onDelete={() => setTags(tags.filter((_, i) => i !== index))} color="primary" />
            ))}
            <TextField variant="filled" placeholder="Add Tag" onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim() !== "") {
                setTags([...tags, e.target.value.trim()]);
                e.target.value = "";
                e.preventDefault();
              }
            }} />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Save Blog
          </Button>
        </Box>
      </form>

      {/* Existing Blogs Section */}
      <Box mt="40px">
        <Typography variant="h4" mb="10px">Existing Blogs</Typography>
        <Box display="flex" flexWrap="wrap" gap="20px">
          {blogs.map((blog, index) => (
            <Box key={index} width="250px" p="10px" bgcolor="#f5f5f5" borderRadius="10px"
              sx={{ transition: "0.3s", '&:hover': { transform: "scale(1.05)", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" } }}>
              
              <img src={blog.images?.[0]} alt={blog.title} width="100%" style={{ borderRadius: "10px" }} />
              <Typography variant="h6" fontWeight="bold">{blog.title}</Typography>
              <Typography variant="body2" color="gray">{blog.content.substring(0, 50)}...</Typography>
              <Typography variant="body2" color="blue" onClick={() => window.open(blog.url, "_blank")}>Read More</Typography>
              <Button onClick={() => handleDeleteBlog(blog.id)} color="error" size="small">Delete</Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
