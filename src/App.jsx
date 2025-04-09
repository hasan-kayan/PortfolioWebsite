import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";

// HOOK
import useIsTouchDevice from "./hooks/useIsTouchDevice";

// PAGES (ROUTES)
import Home from "./Pages/Home";
import BlogList from "./Pages/Blogs/Blogs";
import About from "./Pages/About";
import Projects from "./Pages/Projects/Projects";
import Login from "./Pages/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/AdminPanel/Dashboard";
import BlogManager from "./Pages/AdminPanel/BlogManager/BlogManager";
import ProjectManager from "./Pages/AdminPanel/ProjectManager/ProjectManager"
import PortfolioManager from "./Pages/AdminPanel/AboutManager/AboutManager";
import { AuthProvider } from "./context/AuthContext";

function AppWrapper() {
  const isTouchDevice = useIsTouchDevice();
  const location = useLocation();

  // Add all paths where NavBar/Footer should be hidden
  const hideUIRoutes = ["/dashboard", "/admin", "/admin/settings"];

  const shouldHideUI = hideUIRoutes.includes(location.pathname);

  return (
    <div
      className="flex flex-col min-h-screen bg-appbgcolor cursor-none"
      style={{
        backgroundImage: "url('/texture.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* NavBar */}
      {!shouldHideUI && (
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
      )}

      {/* Page Content */}
      <div className="container mx-auto p-4 flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
            <Route
      path="/dashboard/blogs"
      element={
        <PrivateRoute>
          <BlogManager />
        </PrivateRoute>
      }
    />
    <Route
      path="/dashboard/projects"
      element={
        <PrivateRoute>
          <ProjectManager />
        </PrivateRoute>
      }
    />
    <Route
  path="/dashboard/portfolio"
  element={
    <PrivateRoute>
      <PortfolioManager />
    </PrivateRoute>
  }
/>

        </Routes>
      </div>

      {/* Footer */}
      {!shouldHideUI && <Footer />}

      {/* Custom Cursor */}
      {!isTouchDevice && <CustomCursor />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;
