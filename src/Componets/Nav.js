import React, { useState } from "react";
import image from "../Images/logo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white z-10">
      <div className="flex items-center justify-between p-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={image}
            alt="logo"
            className="logo"
            width={80}
            height={80}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {Links.map((link, index) => (
              <li key={index} className="text-xl">
                <Link
                  to={link.link}
                  className="flex items-center space-x-2 text-gray-800 hover:text-red-600"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-red-700">
          <button style={{ fontSize: "28px" }}>
            <ion-icon name="logo-instagram"></ion-icon>
          </button>
          <button style={{ fontSize: "28px" }}>
            <ion-icon name="logo-facebook"></ion-icon>
          </button>
          <button style={{ fontSize: "28px" }}>
            <ion-icon name="logo-twitter"></ion-icon>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <ion-icon
              name={isOpen ? "close-outline" : "menu-outline"}
              style={{ fontSize: "40px" }}
            ></ion-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white py-4 px-6 border-t border-gray-200 transition-transform duration-300 ease-in-out ${isOpen ? "transform translate-y-0" : "transform translate-y-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-blue-600"
          >
            <ion-icon
              name="close-outline"
              style={{ fontSize: "40px" }}
            ></ion-icon>
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="space-y-4 text-center">
          {Links.map((link, index) => (
            <li key={index} className="text-xl">
              <Link
                to={link.link}
                onClick={() => setIsOpen(false)} // 🔥 This closes the menu after click
                className="flex items-center justify-center space-x-2 text-gray-800 hover:text-blue-600"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons - Mobile */}
        <div className="flex justify-center space-x-4 text-red-700 gap-5 mt-6">
          <button>
            <ion-icon name="logo-instagram"></ion-icon>
          </button>
          <button>
            <ion-icon name="logo-facebook"></ion-icon>
          </button>
          <button>
            <ion-icon name="logo-twitter"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
