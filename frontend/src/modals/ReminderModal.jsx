import React from "react";

const ReminderModal = ({
  isOpen,
  onClose,
  title,
  options,
  isEditable,
  toggleEditable,
  joinCode,
  generateCode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/30">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Reminder Details
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            disabled={!isEditable}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Read-Only Toggle */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={!isEditable}
            onChange={toggleEditable}
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-gray-700">Read-Only</span>
        </div>

        {/* Generate Code */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={generateCode}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Generate Code
          </button>
          {joinCode && (
            <span className="text-gray-800 font-semibold">
              Code: {joinCode}
            </span>
          )}
        </div>

        {/* Body Options */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Reminder Options</h3>
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {options.length === 0 ? (
              <p className="text-gray-500">No options added.</p>
            ) : (
              options.map((opt, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded-lg text-gray-800"
                >
                  {opt}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* OK & Cancel Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReminderModal;
