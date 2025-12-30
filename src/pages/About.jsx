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
    <section id="about" className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Discover my journey, passions, and the story behind my work
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              
              {/* Bio */}
              <InfoCard
                icon={<FaUser />}
                title="Bio"
                color="blue"
                text="Passionate Full Stack developer with experience building user-friendly and scalable web applications."
              />

              {/* Hobbies */}
              <InfoCard
                icon={<FaHeart />}
                title="Hobbies"
                color="red"
                text="Enjoy hiking, photography, and reading science fiction."
              />

              {/* Languages */}
              <InfoCard
                icon={<FaUser />}
                title="Languages"
                color="orange"
                text="Fluent in English and Urdu."
              />

              {/* Contact */}
              <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <IconWrap color="purple">
                    <FaEnvelope />
                  </IconWrap>
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Email:{" "}
                      <a
                        href="mailto:Atiqashafiq72@gmail.com"
                        className="text-blue-600 hover:underline break-all"
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
              <InfoCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                color="red"
                text="Based in Rawalpindi, Pakistan. Available for remote work."
              />

              {/* Education */}
              <InfoCard
                icon={<FaGraduationCap />}
                title="Education Summary"
                color="teal"
                text="BS in Information Technology (2018–2022). Full-Stack Bootcamp Graduate."
              />
            </div>

            {/* Bottom section */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              
              {/* Social */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="text-gray-700 font-medium">
                  Follow me on:
                </span>
                <div className="flex gap-3">
                  <SocialIcon href="https://www.linkedin.com/in/atiqa-shafiq-70b01b31a">
                    <FaLinkedin />
                  </SocialIcon>
                  <SocialIcon href="https://github.com/AtiqaShafiq">
                    <FaGithub />
                  </SocialIcon>
                  <SocialIcon href="https://twitter.com/your-twitter-username">
                    <FaTwitter />
                  </SocialIcon>
                </div>
              </div>

              {/* CV */}
              <a
                href={cv}
                download
                className="bg-black text-white px-6 py-2 rounded-md shadow hover:bg-blue-800 transition text-center"
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

/* Reusable Components */

function IconWrap({ children, color }) {
  return (
    <div
      className={`w-11 h-11 md:w-12 md:h-12 rounded-full bg-${color}-100 text-${color}-600 flex items-center justify-center text-lg`}
    >
      {children}
    </div>
  );
}

function InfoCard({ icon, title, text, color }) {
  return (
    <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <IconWrap color={color}>{icon}</IconWrap>
        <div>
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500 mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
    >
      {children}
    </a>
  );
}
