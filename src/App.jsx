// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedPage";
import Login from "./Pages/Login";

function App() {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <Router>
      <div className="min-h-screen bg-appbgcolor">
        {/* Only show NavBar if authenticated */}
        {isAuthenticated && <NavBar />}
        <div className="container mx-auto p-4">
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              {/* If you also want /home to be protected: */}
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
