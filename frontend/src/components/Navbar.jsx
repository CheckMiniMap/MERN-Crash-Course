import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  // Track current theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  // Apply theme on initial load
  useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function
  const toggleColorMode = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="w-full bg-white dark:bg-black shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="text-2xl sm:text-3xl font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          aria-label="Go to Home Page"
        >
          Product Store 🛒
        </Link>

        {/* Create Button & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/create" 
            className="flex items-center justify-center p-2 rounded-lg bg-blue-700 dark:bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
            aria-label="Create New Product"
          >
            <CiSquarePlus size='24' />
          </Link>

          {/* Dark Mode Toggle Button */}
          <button 
            onClick={toggleColorMode} 
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-500 text-black dark:text-white  transition duration-200"
          >
            {theme === "dark" ? <LuSun size='24' /> : <IoMoon size='24' />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
