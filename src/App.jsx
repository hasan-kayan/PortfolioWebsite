import React from "react";
import "tailwindcss/tailwind.css";
import MediumProfile from "./Pages/Blogs/Blogs";
import ContactModal from "./Components/ContactModal/ContactModal";

function App() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-silver">
      <MediumProfile />
      <ContactModal />
    </div>
  );
}

export default App;
