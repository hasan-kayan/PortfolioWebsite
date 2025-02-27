import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Chip } from "@mui/material";
import { Formik, FieldArray } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import axios from "axios";

// Load environment variables
const API_URL = process.env.REACT_APP_API_URL;

const Blogs = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [blogs, setBlogs] = useState([]); // Store existing blogs

  // Fetch existing blogs
  useEffect(() => {
    axios.get(`${API_URL}/blogs`)
      .then(response => setBlogs(response.data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  // Function to send blog to backend
  const handleFormSubmit = async (values, { resetForm }) => {
    console.log("Saving Blog")
    const blogData = {
      title: values.title,
      image: values.image,
      content: values.content,
      mediumLink: values.mediumLink,
      tags: values.tags
    };

    try {
      await axios.post(`${API_URL}/blogs`, blogData);
      alert("Blog Saved Successfully!");
      setBlogs([...blogs, blogData]); // Update list
      resetForm();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog.");
    }
  };

  return (
    <Box m="20px">
      <Header title="Add New Blog" subtitle="Add a new blog entry." />

      {/* Form to Add New Blog */}
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
              {/* Blog Title */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Blog Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Image Upload */}
              <input
                type="file"
                accept="image/*"
                onChange={(event) => setFieldValue("image", event.target.files[0])}
                style={{ gridColumn: "span 4" }}
              />
              
              {/* Blog Content */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Blog Content"
                multiline
                rows={4}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.content}
                name="content"
                error={!!touched.content && !!errors.content}
                helperText={touched.content && errors.content}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Medium Link */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Medium Link"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mediumLink}
                name="mediumLink"
                error={!!touched.mediumLink && !!errors.mediumLink}
                helperText={touched.mediumLink && errors.mediumLink}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Tags */}
              <FieldArray name="tags">
                {({ push, remove }) => (
                  <Box display="flex" flexWrap="wrap" gap="10px" sx={{ gridColumn: "span 4" }}>
                    {values.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        onDelete={() => remove(index)}
                        color="primary"
                      />
                    ))}
                    <TextField
                      variant="filled"
                      placeholder="Add Tag"
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && event.target.value.trim() !== "") {
                          push(event.target.value.trim());
                          event.target.value = "";
                          event.preventDefault();
                        }
                      }}
                    />
                  </Box>
                )}
              </FieldArray>
            </Box>

            {/* Save Button */}
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save Blog
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      {/* Existing Blogs List */}
      <Box mt="40px">
        <Typography variant="h4" mb="10px">Existing Blogs</Typography>
        <Box display="flex" flexWrap="wrap" gap="20px">
          {blogs.map((blog, index) => (
            <Box key={index} width="250px" p="10px" bgcolor="#f5f5f5" borderRadius="10px">
              <img src={blog.image} alt={blog.title} width="100%" style={{ borderRadius: "10px" }} />
              <Typography variant="h6" fontWeight="bold">{blog.title}</Typography>
              <Typography variant="body2" color="gray">{blog.content.substring(0, 50)}...</Typography>
              <Typography variant="body2" color="blue" onClick={() => window.open(blog.mediumLink, "_blank")}>
                Read More
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

// Validation Schema
const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  mediumLink: yup.string().url("Invalid URL").required("Medium link is required"),
  tags: yup.array().of(yup.string()).min(1, "At least one tag is required"),
});

// Initial Values
const initialValues = {
  title: "",
  image: null,
  content: "",
  mediumLink: "",
  tags: [],
};

export default Blogs;
