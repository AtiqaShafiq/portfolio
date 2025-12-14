// About.jsx
import React from "react";
import cv from "../assets/files/Atiqa RESUME.pdf";
import {
  FaUser,
  FaHeart,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import profileImg from "../assets/images/pic.jpg";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Discover my journey, passions, and the story behind my work
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Bio */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                    <FaUser />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bio</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Passionate Full Stack with experience building
                      user-friendly and scalable web applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl">
                    <FaHeart />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Hobbies</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Enjoy hiking, photography, and reading science fiction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl">
                    <FaUser />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Languages</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Fluent in English and Urdu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Email:{" "}
                      <a
                        href="mailto:Atiqashafiq72@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        Atiqashafiq72@gmail.com
                      </a>
                      <br />
                      Phone: +92-333-91548
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Based in Rawalpindi, Pakistan. Available for remote work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xl">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Education Summary
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                      BS in Information Technology (2018–2022). Full-Stack
                      Bootcamp Graduate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: Social & CV */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Follow me on:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/atiqa-shafiq-70b01b31a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/AtiqaShafiq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://twitter.com/your-twitter-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              <a
                href={cv}
                download
                className="bg-black text-white px-5 py-2 rounded-md shadow hover:bg-blue-800"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
