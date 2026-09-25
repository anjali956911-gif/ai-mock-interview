import { Link } from "react-router-dom";
import { BrainCircuit } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-white font-bold text-2xl"
          >
            <BrainCircuit className="w-9 h-9 text-violet-400" />
            <span>
              AI<span className="text-violet-400">Mock</span>
            </span>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#how" className="hover:text-white transition">
              How it Works
            </a>

            <a href="#reviews" className="hover:text-white transition">
              Reviews
            </a>

            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:scale-105 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;