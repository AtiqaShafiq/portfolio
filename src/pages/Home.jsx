import React, { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCalendarAlt, FaCheckCircle, FaSmile, FaDownload, FaPaperPlane } from "react-icons/fa";
import profilePic from "../assets/images/pic.jpg";
import cvFile from "../assets/files/Atiqa RESUME.pdf";

export default function Home() {
  const titles = ["Full Stack Developer", "Frontend Developer"];
  const [displayText, setDisplayText] = useState("");
  const displayTextRef = useRef("");
  const titleIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTitle = titles[titleIndexRef.current];
      if (!isDeletingRef.current) {
        displayTextRef.current = currentTitle.slice(
          0,
          displayTextRef.current.length + 1
        );
        setDisplayText(displayTextRef.current);
        if (displayTextRef.current.length === currentTitle.length) {
          isDeletingRef.current = true;
        }
      } else {
        displayTextRef.current = currentTitle.slice(
          0,
          displayTextRef.current.length - 1
        );
        setDisplayText(displayTextRef.current);
        if (displayTextRef.current.length === 0) {
          isDeletingRef.current = false;
          titleIndexRef.current = (titleIndexRef.current + 1) % titles.length;
        }
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Atiqa RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-10 md:py-16"
    >
      {/* Left Side */}
      <div className="max-w-xl w-full text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-black">Hi, I'M </span>
          <span className="text-blue-700">Atiqa Shafiq</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-800 mt-2 h-8">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          I am a passionate developer who loves building clean, modern, and user-friendly applications.
        </p>

        {/* Download CV / Contact Me */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
          <button
            className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition font-medium"
            onClick={handleDownloadCV}
          >
            <FaDownload /> Download CV
          </button>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 border border-blue-700 text-blue-700 px-6 py-2 rounded-xl hover:bg-blue-50 transition font-medium"
          >
            <FaPaperPlane /> Contact Me
          </a>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
          <StatCard icon={<FaCalendarAlt />} text="2+ Years Experience" />
          <StatCard icon={<FaCheckCircle />} text="10+ Projects" />
          <StatCard icon={<FaSmile />} text="5+ Happy Clients" />
        </div>
      </div>

      {/* Right Side */}
      <div className="mb-8 lg:mb-0 lg:ml-10 flex justify-center">
        <img
          src={profilePic}
          alt="Atiqa Shafiq"
          className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-700"
        />
      </div>
    </section>
  );
}

/* Reusable Stat Card */
function StatCard({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-blue-700 rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition h-12 justify-center sm:justify-start">
      <div className="text-blue-700 text-xl">{icon}</div>
      <span className="ml-2 text-gray-800 font-medium text-sm sm:text-base">{text}</span>
    </div>
  );
}
