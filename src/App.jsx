import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

//COMPONENTS
import NavBar from "./Components/Navbar";
//PAGES (ROUTES)
import Home from "./Pages/Home";
import BlogList from "./Pages/Blogs/Blogs"
import BlogDetail from "./Pages/Blogs/BlogDetail";
function App() {
  return (
    <Router>
      <motion.div
        className="min-h-screen min-w-full overflow-hidden"
        animate={{
          background: [
            "linear-gradient(to right, #ff7eb3, #ff758c)",
            "linear-gradient(to right, #6a11cb, #2575fc)",
            "linear-gradient(to right, #ff7eb3, #ff758c)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      </motion.div>
    </Router>
  );
}


export default App;
