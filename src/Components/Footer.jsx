import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-appbgcolor border-t border-white/20 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col items-center justify-center space-y-2">
        {/* Icon Links */}
        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/in/hasan-kayan-37a59319b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition duration-200 cursor-none"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/hasan-kayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition duration-200 cursor-none"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://medium.com/@hasankayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition duration-200 cursor-none"
            aria-label="Medium"
          >
            <FaMedium size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
