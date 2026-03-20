import { Outlet, Link, useLocation } from "react-router";
import { Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Serving Timonium, MD & Surrounding Areas</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:410-555-0123" className="hover:text-[#0ea5e9] transition-colors">
              (410) 555-0123
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-[#1e3a8a]">Altman's</span>
              <span className="text-sm text-[#0ea5e9]">Pristine Power Washing</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? "text-[#0ea5e9] font-semibold"
                      : "text-gray-700 hover:text-[#0ea5e9]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-[#0ea5e9] text-white px-6 py-2 rounded-lg hover:bg-[#0284c7] transition-colors"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1e3a8a] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 ${
                    location.pathname === link.path
                      ? "text-[#0ea5e9] font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-4 bg-[#0ea5e9] text-white px-6 py-2 rounded-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Altman's Pristine Power Washing</h3>
              <p className="text-gray-300">
                Your trusted local power washing service in Timonium, MD.
                Professional, reliable, and affordable.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-[#0ea5e9] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (410) 555-0123
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Timonium, MD
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2026 Altman's Pristine Power Washing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
