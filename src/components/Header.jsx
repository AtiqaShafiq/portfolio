import React from "react";

export default function Header() {
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
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Portfolio</h1>
        <nav>
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="font-medium text-gray-600 hover:text-blue-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
