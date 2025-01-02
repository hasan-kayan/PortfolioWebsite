import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Components/HomePage/Home";
import Projects from "./Components/ProjectsPage/Projects";
import Analyze from "./Components/AnalyzePage/Analyze";
import Tools from "./Components/ToolsPage/Tools"
import Passwords from "./Components/PasswordPage/Password";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-appbgcolor">
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Analyze />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/passwords" element={<Passwords />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
