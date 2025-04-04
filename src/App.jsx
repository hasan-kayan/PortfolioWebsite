import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor"; // <-- import
// PAGES (ROUTES)
import Home from "./Pages/Home";
import BlogList from "./Pages/Blogs/Blogs";
import About from "./Pages/About";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <Router>
      <div
        className="relative min-h-screen min-w-full bg-appbgcolor cursor-none"
        style={{
          backgroundImage: "url('/texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Sticky Navbar wrapper */}
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>

        {/* Page Content */}
        <div className="container mx-auto p-4 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

          </Routes>
        </div>
          {/* Sticky Navbar wrapper */}
          <div className="sticky bottom-0 z-50">
          <Footer />
        </div>
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;
