import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo and Description */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Ngabo daniel</h2>
          <p className="text-sm">Web Developer | Designer | Creator</p>
        </div>

        {/* Middle Section: Social Media Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/in/ngabo-daniel-011118283/"
            className="hover:text-blue-700"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/ngabodaniel1000"
            className="hover:text-gray-400"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://instagram.com/odegaard_daniel"
            className="hover:text-pink-500"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://twitter.com/@odegaard_dan"
            className="hover:text-blue-500"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>

        {/* Right Section: Contact Info */}
        <div className="text-center md:text-right">
          <p>
            Email:{" "}
            <a
              href="mailto:yourname@example.com"
              className="hover:underline"
            >
              ngabodaniel1000@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +250 734196604
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ngabodaniel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
