import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Education", path: "/#education" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header className="border-b border-gray-300 fixed w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            My Portfolio
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="font-medium text-gray-600 hover:text-blue-600 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col py-4 space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="block px-4 text-gray-600 font-medium hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
