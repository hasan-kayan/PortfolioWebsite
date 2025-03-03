import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import BlogList from "./Pages/Blogs/Blogs"
import BlogDetail from "./Pages/Blogs/BlogDetail";

function App() {
  return (
    <Router>
    <div className="min-h-screen min-w-full overflow-hidden bg-gradient-to-r from-appbgcolorstart to-appbgcolorend">
    <NavBar />
        <div className="container mx-auto p-4">
          <Routes>             
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/" element={<Home />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
