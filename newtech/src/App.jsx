import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Components/HomePage/Home";
import Projects from "./Components/ProjectsPage/Projects";
import ResumeNew from "./Components/Resume/Resume";
import About from "./Components/About/About"
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-appbgcolor">
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Projects />} />
            <Route path="/resume" element={<ResumeNew />} />
            <Route path="/projects" element={<About />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
