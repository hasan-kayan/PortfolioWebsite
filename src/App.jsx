import React from "react";
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import "tailwindcss/tailwind.css";
import MediumProfile from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import ContactModal from "./Components/ContactModal/ContactModal";
import Navbar from './Components/Navbar/Navbar.jsx';
function App() {

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-silver">
        <Router>
            <div>
                <Navbar />
                <div className="container mx-auto p-4 ">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<MediumProfile />} />
                    </Routes>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
