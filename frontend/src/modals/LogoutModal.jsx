import React from "react";

export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 animate-fadeIn">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Confirm Logout
        </h2>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out of your account?
        </p>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-150"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-150"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
