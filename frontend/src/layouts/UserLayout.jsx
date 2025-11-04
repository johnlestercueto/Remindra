import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, Outlet } from "react-router-dom"; // ✅ add Outlet
import LogoutModal from "../modals/LogoutModal";
import JoinModal from "../modals/JoinModal";

const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogoutClick = () => setShowLogoutModal(true);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    setIsOpen(false);
    navigate("/login");
  };
  const cancelLogout = () => setShowLogoutModal(false);

  const handleJoinClick = () => setShowJoinModal(true);
  const confirmJoin = () => {
    setShowJoinModal(false);
    alert("You have successfully joined the organization!");
  };
  const cancelJoin = () => setShowJoinModal(false);

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

      {/* Sidebar */}
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
          <li
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/user")}
          >
            Home
          </li>
          <li
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={handleJoinClick}
          >
            Join
          </li>
          <li
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/user/create-reminders")}
          >
            Create Reminders
          </li>
          <li
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/user/profile")}
          >
            Profile
          </li>
          <li
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/user/settings")}
          >
            Settings
          </li>
          <li
            className="p-2 rounded hover:bg-red-50 text-red-600 cursor-pointer"
            onClick={handleLogoutClick}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* 🔹 Nested Routes will render here */}
      <main className="flex-grow p-6">
        <Outlet /> {/* ✅ ito ang maglalabas ng OrganizationList */}
      </main>

      {/* Modals */}
      {showLogoutModal && (
        <LogoutModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
      {showJoinModal && (
        <JoinModal onConfirm={confirmJoin} onCancel={cancelJoin} />
      )}
    </div>
  );
};

export default UserLayout;
