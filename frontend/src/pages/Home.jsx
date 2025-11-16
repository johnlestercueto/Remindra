import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Welcome to Remindra
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
          Stay organized, never miss a deadline. Remindra helps students manage
          tasks and reminders effortlessly with a clean, distraction-free
          interface.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 text-left">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Easy Task Management
          </h3>
          <p className="text-gray-600">
            Add, edit, and organize tasks quickly without clutter.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Smart Reminders
          </h3>
          <p className="text-gray-600">
            Get notified so you never miss an important deadline.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Focus Mode
          </h3>
          <p className="text-gray-600">
            Minimal interface keeps distractions away and boosts productivity.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Custom Categories
          </h3>
          <p className="text-gray-600">
            Organize your tasks by subjects, projects, or personal goals.
          </p>
        </div>
      </div>

      {/* User Statistics */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-md w-60 hover:shadow-lg transition">
          <h3 className="text-3xl font-bold text-indigo-600">12,540+</h3>
          <p className="text-gray-600 mt-1">Active Students</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md w-60 hover:shadow-lg transition">
          <h3 className="text-3xl font-bold text-indigo-600">98%</h3>
          <p className="text-gray-600 mt-1">User Satisfaction</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md w-60 hover:shadow-lg transition">
          <h3 className="text-3xl font-bold text-indigo-600">45,000+</h3>
          <p className="text-gray-600 mt-1">Tasks Completed</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <p className="text-gray-700 italic leading-relaxed">
            “Since I started using Remindra, I never missed a deadline again.
            The minimal design makes it super easy to focus.”
          </p>
          <h4 className="mt-4 font-semibold text-gray-900">
            — Alex Santos, BSIT Student
          </h4>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <p className="text-gray-700 italic leading-relaxed">
            “Remindra keeps all my tasks in one place. The interface is simple,
            fast, and perfect for students like me.”
          </p>
          <h4 className="mt-4 font-semibold text-gray-900">
            — Maria Lopez, College Student
          </h4>
        </div>
      </div>
    </section>
  );
}
