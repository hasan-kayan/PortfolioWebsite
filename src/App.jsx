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
        className="flex flex-col min-h-screen bg-appbgcolor cursor-none"
        style={{
          backgroundImage: "url('/texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Navbar */}
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>

        {/* Main Content */}
        <div className="container mx-auto p-4 flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* Custom Cursor */}
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;
