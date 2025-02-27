
import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Chip } from "@mui/material";
import { Formik, FieldArray } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import Header from "../../../components/Header";

const API_URL = process.env.REACT_APP_API_URL;

const Blogs = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/website/blog/gett-all-blogs`)
      .then(response => setBlogs(response.data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  const handleFormSubmit = async (values, { resetForm }) => {
    const blogData = {
      title: values.title,
      content: values.content,
      images: values.images,
      tags: values.tags,
      url: values.url
    };
    try {
      await axios.post(`${API_URL}/website/blog/create-blog`, blogData);
      alert("Blog Saved Successfully!");
      setBlogs([...blogs, blogData]);
      resetForm();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog.");
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`${API_URL}/website/blog/delete-blogby${id}`);
      setBlogs(blogs.filter(blog => blog.id !== id));
      alert("Blog Deleted Successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog.");
    }
  };

  return (
    <Box m="20px">
      <Header title="Manage Blogs" subtitle="Create, update, or delete blog entries." />
      
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={blogSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="20px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
            >
              <TextField fullWidth variant="filled" label="Title" name="title" onBlur={handleBlur} onChange={handleChange} value={values.title} error={!!touched.title && !!errors.title} helperText={touched.title && errors.title} sx={{ gridColumn: "span 4" }} />

              <TextField fullWidth variant="filled" label="URL" name="url" onBlur={handleBlur} onChange={handleChange} value={values.url} error={!!touched.url && !!errors.url} helperText={touched.url && errors.url} sx={{ gridColumn: "span 4" }} />

              <input type="file" accept="image/*" multiple onChange={(event) => setFieldValue("images", Array.from(event.target.files))} style={{ gridColumn: "span 4" }} />
              
              <TextField fullWidth variant="filled" label="Content" multiline rows={4} name="content" onBlur={handleBlur} onChange={handleChange} value={values.content} error={!!touched.content && !!errors.content} helperText={touched.content && errors.content} sx={{ gridColumn: "span 4" }} />
              
              <FieldArray name="tags">
                {({ push, remove }) => (
                  <Box display="flex" flexWrap="wrap" gap="10px" sx={{ gridColumn: "span 4" }}>
                    {values.tags.map((tag, index) => (
                      <Chip key={index} label={tag} onDelete={() => remove(index)} color="primary" />
                    ))}
                    <TextField variant="filled" placeholder="Add Tag" onKeyDown={(event) => {
                      if (event.key === "Enter" && event.target.value.trim() !== "") {
                        push(event.target.value.trim());
                        event.target.value = "";
                        event.preventDefault();
                      }
                    }} />
                  </Box>
                )}
              </FieldArray>
            </Box>
            
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>Save Blog</Button>
            </Box>
          </form>
        )}
      </Formik>

      <Box mt="40px">
        <Typography variant="h4" mb="10px">Existing Blogs</Typography>
        <Box display="flex" flexWrap="wrap" gap="20px">
          {blogs.map((blog, index) => (
            <Box key={index} width="250px" p="10px" bgcolor="#f5f5f5" borderRadius="10px" sx={{ transition: "0.3s", '&:hover': { transform: "scale(1.05)", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" } }}>
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

const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  url: yup.string().url("Invalid URL").required("URL is required"),
  tags: yup.array().of(yup.string()).min(1, "At least one tag is required"),
});

const initialValues = {
  title: "",
  images: [],
  content: "",
  url: "",
  tags: [],
};

export default Blogs;