import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin/Admin"
import ProtectedRoute from "./Components/ProtectedPage";
import Login from "./Pages/Admin/Login"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-appbgcolor">
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
             <Route element={<ProtectedRoute />}>
              <Route path="/admin-hk" element={<Admin />} />
            </Route>
            <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login/>}/> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
