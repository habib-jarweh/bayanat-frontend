import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SubscribeButton from "./SubscribeButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/vite.svg" alt="Vite logo" className="h-8 w-8" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              Bayanat
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <SubscribeButton variant="navbar" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/mission"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Our Mission
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <SubscribeButton
                  variant="navbar"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
