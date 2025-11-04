import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
      <h1 className="text-xl font-semibold">Remindra</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact
        </Link>
        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>
      </nav>
    </header>
  );
}
