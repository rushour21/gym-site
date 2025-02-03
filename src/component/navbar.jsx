import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaUserTie, FaCommentDots, FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="cursor-pointer text-2xl font-bold text-white font-[Cavest]">
            Fitlife Gym
          </div>
          <div className="hidden md:flex gap-8 items-center text-white font-semibold">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              <FaHome />
              Home
            </Link>
            <Link
              to="trainer"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300 cursor-pointer"
            >
              <FaUserTie />
              Trainer
            </Link>
            <Link
              to="opinions"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300 cursor-pointer"
            >
              <FaCommentDots />
              Opinions
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer"
            >
              <FaEnvelope />
              Contact
            </Link>
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        {menuOpen && (
            <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4 ">
                <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 trnsition-colors duration-300 cursor-pointer"
                onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="trainer"
              smooth={true}
              duration={500}
              className="hover:text-green-500 trnsition-colors duration-300 cursor-pointer"
                onClick={() => setMenuOpen(false)}>
              Trainer
            </Link>
            <Link
              to="opinions"
              smooth={true}
              duration={500}
              className="hover:text-pink-500 trnsition-colors duration-300 cursor-pointer"
                onClick={() => setMenuOpen(false)}>
              Opinions
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-purple-500 trnsition-colors duration-300 cursor-pointer"
                onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            </div>
        )}
      </nav>
    </>
  );
}
