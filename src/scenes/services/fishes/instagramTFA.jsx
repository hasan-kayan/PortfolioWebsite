// TwoFactorPage.jsx
import React, { useState } from 'react';

function TwoFactorPage() {
  const [code, setCode] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();
    // TODO: verify the 2FA code via backend API (e.g., fetch('/api/verify-2fa', {...}))
    console.log("Confirming 2FA code", code);
  };

  const handleResend = (e) => {
    e.preventDefault();
    // TODO: trigger resend 2FA code via backend API
    console.log("Resending 2FA code...");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white border border-gray-300 p-6 rounded-md text-center">
        {/* Instagram logo (for branding consistency on the 2FA page) */}
        <div className="flex justify-center mb-6">
          <img 
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" 
            alt="Instagram" 
            className="h-10"
          />
        </div>
        {/* Optional instruction text */}
        <p className="text-gray-800 text-sm mb-4">
          Enter the 6-digit code sent to your device
        </p>
        {/* 2FA code input and Confirm button */}
        <form onSubmit={handleConfirm} className="flex flex-col space-y-4">
          <input 
            type="text" 
            inputMode="numeric" 
            pattern="[0-9]*" 
            maxLength={6}
            placeholder="Enter authentication code" 
            className="px-4 py-2 text-center tracking-widest border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Confirm
          </button>
        </form>
        {/* Resend code link */}
        <div className="mt-4">
          <a href="#" onClick={handleResend} className="text-sm text-blue-700 hover:underline">
            Resend Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default TwoFactorPage;
