import React, { useState } from "react";
import ReminderModal from "../modals/ReminderModal"; // import modal

const CreateReminders = () => {
  const [title, setTitle] = useState("");
  const [option, setOption] = useState("");
  const [options, setOptions] = useState([]);
  const [isEditable, setIsEditable] = useState(true);
  const [joinCode, setJoinCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setJoinCode(code);
  };

  const addOption = (e) => {
    e.preventDefault();
    if (!option) return;
    setOptions([...options, option]);
    setOption("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-xl w-full">
        {/* Title */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Reminder Title
          </h2>
          <input
            type="text"
            placeholder="Enter reminder title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            disabled={!isEditable}
          />
        </div>

        {/* Options Input */}
        {isEditable && (
          <form
            onSubmit={addOption}
            className="bg-white shadow-lg rounded-2xl p-6 mb-6"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">
                Add Reminder Body
              </label>
              <input
                type="text"
                placeholder="Enter option"
                value={option}
                onChange={(e) => setOption(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
            >
              Add Option
            </button>
          </form>
        )}

        {/* Show Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
        >
          Submit
        </button>

        {/* Modal */}
        <ReminderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          options={options}
          isEditable={isEditable}
          toggleEditable={() => setIsEditable(!isEditable)}
          joinCode={joinCode}
          generateCode={generateCode}
        />
      </div>
    </div>
  );
};

export default CreateReminders;
