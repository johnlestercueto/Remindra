// src/layouts/UserLayout.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, Outlet } from "react-router-dom";
import LogoutModal from "../modals/LogoutModal";
import schoolReminders from "../../data";

// --- Join Modal ---
const TestJoinModal = ({ joinCode, setJoinCode, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded p-6 w-80">
        <h3 className="text-lg font-semibold mb-2">Enter join code</h3>
        <input
          type="text"
          placeholder=""
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-3 py-1 rounded border"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-3 py-1 rounded bg-blue-600 text-white"
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
// --- end Join Modal ---

const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joinCode, setJoinCode] = useState("");

  // ✅ Load joined sections from localStorage on mount
  const [joined, setJoined] = useState(() => {
    const stored = localStorage.getItem("joinedSections");
    return stored ? JSON.parse(stored) : [];
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" | "error"

  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Logout
  const handleLogoutClick = () => setShowLogoutModal(true);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    setIsOpen(false);
    navigate("/login");
  };
  const cancelLogout = () => setShowLogoutModal(false);

  // Join
  const handleJoinClick = () => {
    setJoinCode("");
    setShowJoinModal(true);
  };

  const confirmJoin = () => {
    const normalizedCode = String(joinCode).trim().toLowerCase();

    const sectionObj = schoolReminders.find(
      (s) => s?.code?.trim().toLowerCase() === normalizedCode
    );

    if (sectionObj) {
      // ✅ Add joined section only if not already joined
      setJoined((prev) => {
        if (!prev.some((s) => s.section === sectionObj.section)) {
          return [...prev, sectionObj];
        }
        return prev;
      });

      setShowJoinModal(false);
      setIsOpen(false);

      setMessage(`You have successfully joined ${sectionObj.section}!`);
      setMessageType("success");

      navigate(`/user/organization/${sectionObj.section}`);
    } else {
      setMessage("Invalid code. Please check and try again.");
      setMessageType("error");
    }
  };

  const cancelJoin = () => setShowJoinModal(false);

  // ✅ Save joined sections to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("joinedSections", JSON.stringify(joined));
  }, [joined]);

  // Auto-dismiss message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
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

      {/* SIDE MENU */}
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
            className="p-2 rounded hover:bg-red-50 text-red-600 cursor-pointer"
            onClick={handleLogoutClick}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* OUTLET + PASSING JOINED */}
      <main className="flex-grow p-6">
        <Outlet context={{ joined }} />
      </main>

      {/* Inline success/error message */}
      {message && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded shadow-md text-white ${
            messageType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message}
        </div>
      )}

      {showLogoutModal && (
        <LogoutModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}

      {showJoinModal && (
        <TestJoinModal
          joinCode={joinCode}
          setJoinCode={setJoinCode}
          onConfirm={confirmJoin}
          onCancel={cancelJoin}
        />
      )}
    </div>
  );
};

export default UserLayout;
