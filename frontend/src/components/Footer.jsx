export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Remindra</h2>
          <p className="text-gray-400 text-sm">
            Your go-to platform for managing reminders efficiently. Stay
            organized and never miss anything important.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Services</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Task Management</li>
            <li>Calendar Integration</li>
            <li>Notifications</li>
            <li>Analytics & Reports</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Support</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Contact Support</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm">Email: support@remindra.com</p>
          <p className="text-gray-400 text-sm">Phone: +63 912 345 6789</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Remindra. All rights reserved.
      </div>
    </footer>
  );
}
