import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import schoolReminders from "../../data";

const OrganizationTodo = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const sectionData = schoolReminders.find((s) => s.section === name);

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [modalDateTime, setModalDateTime] = useState("");

  useEffect(() => {
    if (sectionData) {
      const initialTodos = sectionData.reminders.map((r, index) => ({
        id: index + 1,
        task: `${r.title} - ${r.reminder}`,
        dateTime: r.dueDate || "",
      }));
      setTodos(initialTodos);
    }
  }, [sectionData]);

  const handleAddOrUpdate = () => {
    if (input.trim() === "") return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, task: input } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), task: input, dateTime: "" }]);
    }

    setInput("");
  };

  const editTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    setInput(todo.task);
    setEditId(id);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const openModal = (id) => {
    const todo = todos.find((t) => t.id === id);
    setCurrentTodoId(id);
    setModalDateTime(todo.dateTime || "");
    setShowModal(true);
  };

  const saveDateTime = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodoId ? { ...todo, dateTime: modalDateTime } : todo
      )
    );
    setShowModal(false);
    setCurrentTodoId(null);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-50 min-h-screen">
      <button
        className="mb-6 text-gray-600 hover:text-gray-800 transition-colors"
        onClick={() => navigate("/user")}
      >
        ← Back
      </button>

      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        {name} Reminders
      </h1>

      {/* Input */}
      <div className="flex mb-6 shadow-sm">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-200 p-3 flex-1 rounded-l focus:outline-none focus:ring-2 focus:ring-green-200"
          placeholder="Add a task..."
        />
        <button
          onClick={handleAddOrUpdate}
          className="bg-green-400 hover:bg-green-500 text-white px-4 rounded-r transition-colors"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 bg-white rounded-lg mb-3 shadow-sm flex justify-between items-center"
          >
            <div>
              <div className="font-medium text-gray-800">{todo.task}</div>
              <div className="text-sm text-gray-400">
                {todo.dateTime
                  ? new Date(todo.dateTime).toLocaleString([], {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "No date/time set"}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => editTodo(todo.id)}
                className="text-yellow-500 hover:text-yellow-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => openModal(todo.id)}
                className="text-green-500 hover:text-green-600 text-sm"
              >
                Set Date
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20">
          <div className="bg-white p-5 rounded-xl w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Set Date & Time
            </h2>
            <input
              type="datetime-local"
              value={modalDateTime}
              onChange={(e) => setModalDateTime(e.target.value)}
              className="border p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveDateTime}
                className="px-4 py-2 rounded bg-green-400 hover:bg-green-500 text-white transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationTodo;
