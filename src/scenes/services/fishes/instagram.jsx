// LoginPage.jsx
import React, { useState } from 'react';

function LoginPage() {
  // State for form inputs (optional, for handling input values)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Placeholder login handler
  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: call backend login API endpoint, e.g., fetch('/api/login', { ... })
    console.log("Logging in with", username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Login form container */}
      <div className="w-full max-w-sm bg-white border border-gray-300 p-6 rounded-md">
        {/* Instagram logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" 
            alt="Instagram" 
            className="h-12"
          />
        </div>
        {/* Login form */}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Phone number, username, or email" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        {/* "Forgot password?" link */}
        <div className="text-center my-4">
          <a href="#" className="text-sm text-blue-700 hover:underline">Forgot password?</a>
        </div>
        {/* OR separator */}
        <div className="flex items-center mb-4">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="px-4 text-gray-500 font-semibold text-sm">OR</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
        {/* Facebook login option */}
        <div className="text-center mb-4">
          <a href="#" className="text-sm text-blue-600 font-semibold hover:underline">
            Log in with Facebook
          </a>
        </div>
      </div>
      {/* Sign-up prompt box */}
      <div className="w-full max-w-sm bg-white border border-gray-300 mt-4 p-4 text-center text-sm">
        <span className="mr-1">Don’t have an account?</span>
        <a href="#" className="text-blue-500 font-semibold hover:underline">Sign up</a>
      </div>
    </div>
  );
}

export default LoginPage;
