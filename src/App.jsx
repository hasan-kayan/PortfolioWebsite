import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

// COMPONENTS
import NavBar from "./Components/Navbar";

// PAGES (ROUTES)
import Home from "./Pages/Home";
import BlogList from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/Blogs/BlogDetail";
import About from "./Pages/About"
function App() {
  return (
    <Router>
      <div className="relative min-h-screen min-w-full overflow-hidden bg-appbgcolor">
        {/* Animated White Wave */}
        <motion.div
          className="absolute top-0 left-0 w-full"
          animate={{
            y: [0, 15, 0], // Wave motion
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Light Glow Effects */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-30 blur-2xl"></div>

          <svg
            className="w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              fillOpacity="0.7"
              d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            />
          </svg>
        </motion.div>

        <NavBar />
        <div className="container mx-auto p-4 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
