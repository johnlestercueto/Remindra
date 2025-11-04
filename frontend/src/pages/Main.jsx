import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">Remindra</h1>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </header>

      {/* Sidebar (slide menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={toggleMenu}>
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <ul className="p-4 space-y-3">
          <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
            Profile
          </li>
          <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
            Settings
          </li>
          <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">
            Logout
          </li>
        </ul>
      </div>

      {/* Body */}
      <main className="flex-grow p-6">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <ul className="space-y-2">
            <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
              Organization A
            </li>
            <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
              Organization B
            </li>
            <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
              Organization C
            </li>
            <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
              Organization D
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Main;
