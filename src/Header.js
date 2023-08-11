import { Link } from 'react-scroll'
import React, { useState } from "react";

const Header = ({scrollToTimeline}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="">
      <div className="p-4 fixed">
        <button onClick={toggleNavbar}>
        <svg viewBox="0 0 100 80" width="40" height="40" className="fill-pink-300">
       <rect width="100" height="20"></rect>
       <rect y="30" width="100" height="20"></rect>
       <rect y="60" width="100" height="20"></rect>
           </svg>
        </button>
      </div>

      <div
        className={`fixed z-10 top-0 left-0 h-full lg:w-2/12 w-3/4 bg-pink-300 text-white p-4 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleNavbar}>
            <svg viewBox="0 0 100 80" width="40" height="40" className="fill-white">
         <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
            </svg>
        </button>
        <ul className="text-3xl p-6 font-bold antialiased">
        <li className="p-5 cursor-pointer">
        <Link to="home"  spy={true} smooth={true} offset={50} duration={500} onClick={toggleNavbar}>
          Home
        </Link>
        </li>
        <li className="p-5 cursor-pointer">
        <Link to="about"  spy={true} smooth={true} offset={50} duration={500} onClick={toggleNavbar}>
          About
        </Link>
        </li>
        <li className="p-5 cursor-pointer">
        <Link to="timeline"  spy={true} smooth={true} offset={50} duration={500} onClick={toggleNavbar}>
          Timeline
        </Link>
        </li>
          <li className="p-5 cursor-pointer">
          <Link to="skills"  spy={true} smooth={true} offset={50} duration={500} onClick={toggleNavbar}>
          Skills
        </Link>
          </li>
          <li className="p-5 cursor-pointer"> <Link to="work"  spy={true} smooth={true} offset={50} duration={500} onClick={toggleNavbar}>
          Work
        </Link></li>
          <li className="p-5 cursor-pointer"> <Link to="contact"  spy={true} smooth={true} offset={50} duration={500} onClick={toggleNavbar}>
          Contact
        </Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

