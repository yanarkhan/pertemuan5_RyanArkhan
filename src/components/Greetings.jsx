import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { socialLinks } from "./data";

const Greetings = ({ name, npm }) => {
  const icons = {
    FaLinkedin: <FaLinkedin size={24} />,
    FaGithub: <FaGithub size={24} />,
  };

  return (
    <div className="flex items-center justify-center bg-yellow-200">
      <div className="bg-yellow-200 w-80 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition-transform duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500 mb-4">{npm}</p>

          <ul className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${link.color} ${link.hoverColor}`}
                >
                  <span className="sr-only">{link.name}</span>
                  {icons[link.icon]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
