import React, { useState } from "react";

export default function JoinModal({ onConfirm, onCancel }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  // Dummy valid code
  const validCode = "ABC123";

  const handleJoin = () => {
    if (!code.trim()) {
      setError("Please enter a code.");
      return;
    }

    if (code.trim().toUpperCase() !== validCode) {
      setError("Invalid code. Please check and try again.");
      return;
    }

    // Clear error and proceed if valid
    setError("");
    onConfirm(code);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Join Organization
        </h2>
        <p className="text-gray-600 mb-6">
          Enter the organization code to join.
        </p>

        {/* Input Field */}
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          className={`w-full border rounded-lg px-4 py-2 mb-2 focus:outline-none transition-all duration-150 ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-400"
              : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
          }`}
        />

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-4 transition-all duration-150">
            {error}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-150"
          >
            Cancel
          </button>
          <button
            onClick={handleJoin}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-150"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
