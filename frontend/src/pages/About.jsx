export default function About() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        About Remindra
      </h2>
      <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
        Remindra is built for students who want to stay organized effortlessly.
        Track tasks, set reminders, and manage your schedule—all in one clean,
        minimal interface.
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Easy Task Management
          </h3>
          <p className="text-gray-600">
            Add, edit, and organize your tasks quickly without clutter.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Smart Reminders
          </h3>
          <p className="text-gray-600">
            Never miss a deadline with timely notifications and alerts.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Minimal & Focused
          </h3>
          <p className="text-gray-600">
            A clean interface designed to reduce distractions and boost focus.
          </p>
        </div>
      </div>

      {/* Closing note */}
      <p className="mt-12 max-w-2xl mx-auto text-gray-500 text-base md:text-lg">
        Designed with students in mind — simple, natural, and effective.
        Remindra helps you focus on what really matters: your studies and
        personal growth.
      </p>
    </section>
  );
}
