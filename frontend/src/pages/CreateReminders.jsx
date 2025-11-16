import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const generateCode = () =>
  Math.random().toString(36).substring(2, 8).toUpperCase();

export default function ReminderPage() {
  const [title, setTitle] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGenerateCode = () => {
    if (!title.trim()) return;
    setGeneratedCode(generateCode());
  };

  const handleCreate = () => {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("reminders")) || [];
    existing.push({ section: title.trim(), code: generatedCode || "" });
    localStorage.setItem("reminders", JSON.stringify(existing));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/user");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "60px auto",
        padding: "25px",
        borderRadius: "12px",
        background: "#FAFAF7",
        fontFamily: "Inter, sans-serif",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontWeight: 600,
          color: "#333",
        }}
      >
        Create Reminder
      </h2>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #E0E0E0",
          marginBottom: "20px",
          fontSize: "14px",
          outline: "none",
          background: "#fff",
        }}
      />

      {/* Generated Code + Button */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <div
          style={{
            flex: 1,
            padding: "10px",
            background: "#F5F5F3",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: 500,
            color: "#555",
            letterSpacing: "1px",
          }}
        >
          {generatedCode || "Code will appear here"}
        </div>
        <button
          onClick={handleGenerateCode}
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            background: "#81C784",
            color: "#fff",
            fontWeight: 500,
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          Generate
        </button>
      </div>

      {/* Create Button */}
      <button
        onClick={handleCreate}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#4CAF50",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        Create
      </button>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#FFF",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              maxWidth: "300px",
              width: "90%",
            }}
          >
            <h3
              style={{ marginBottom: "10px", color: "#333", fontWeight: 600 }}
            >
              Success!
            </h3>
            <p style={{ marginBottom: "20px", color: "#555" }}>
              Reminder created successfully.
            </p>
            <button
              onClick={closeModal}
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: "none",
                background: "#4CAF50",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
