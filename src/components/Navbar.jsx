import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-4 px-8 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500 tracking-wide">
        Gracia
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
        <Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
        <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
      </div>

    </nav>
  );
}
