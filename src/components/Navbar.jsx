import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white text-[#1E40AF] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-10 flex justify-center items-center text-center gap-10">
        {/* Logo */}
        <Link
          to="/"
          className={`text-4xl font-bold ${
            isActive("/") ? "text-[#FF8C00]" : "text-[#FF8C00]"
          }`}
        >
           LOGOS
          OUTREACH
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center justify-center">
          <li>
            <Link
              to="/"
              className={`transition-colors duration-300 text-2xl font-bold ${
                isActive("/") ? "text-[#FF8C00]" : "hover:text-[#FF8C00]"
              }`}
            >
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setTimeout(() => setAboutOpen(false), 1000)}
          >
            <button
              className={`transition-colors duration-300 text-2xl font-bold ${
                location.pathname.startsWith("/about")
                  ? "text-[#FF8C00]"
                  : "hover:text-[#FF8C00]"
              }`}
            >
              About ▾
            </button>

            {aboutOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-white text-[#1E40AF] shadow-lg rounded-md w-56 z-50">
                <li>
                  <Link
                    to="/about-founder"
                    className="block px-4 py-2 hover:bg-[#1E40AF] hover:text-white rounded-t-md"
                  >
                    About the Founder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-ministry"
                    className="block px-4 py-2 hover:bg-[#1E40AF] hover:text-white rounded-b-md"
                  >
                    About the Ministry
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/programs"
              className={`transition-colors duration-300 text-2xl font-bold ${
                isActive("/programs") ? "text-[#FF8C00]" : "hover:text-[#FF8C00]"
              }`}
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`transition-colors duration-300 text-2xl font-bold ${
                isActive("/contact") ? "text-[#FF8C00]" : "hover:text-[#FF8C00]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#1E40AF] text-white flex flex-col gap-4 px-6 py-4 border-t border-[#FF8C00] text-center items-center">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`transition-colors duration-300 ${
                isActive("/") ? "text-[#FF8C00]" : "hover:text-[#FF8C00]"
              }`}
            >
              Home
            </Link>
          </li>

          {/* Mobile About Dropdown */}
          <li className="w-full flex flex-col items-center">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`transition-colors duration-300 ${
                location.pathname.startsWith("/about")
                  ? "text-[#FF8C00]"
                  : "hover:text-[#FF8C00]"
              }`}
            >
              About {mobileAboutOpen ? "▲" : "▼"}
            </button>
            {mobileAboutOpen && (
              <ul className="mt-2 flex flex-col gap-2 items-center">
                <li>
                  <Link
                    to="/about-founder"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#FF8C00]"
                  >
                    About the Founder
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-ministry"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#FF8C00]"
                  >
                    About the Ministry
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
              className={`transition-colors duration-300 ${
                isActive("/programs") ? "text-[#FF8C00]" : "hover:text-[#FF8C00]"
              }`}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`transition-colors duration-300 ${
                isActive("/contact") ? "text-[#FF8C00]" : "hover:text-[#FF8C00]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
