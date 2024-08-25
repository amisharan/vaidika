import React, { useState } from "react";
import image from "../Images/logo.jpg"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    {
      name: "Home",
      link: "/",
      icon: <ion-icon name="home-outline"></ion-icon>,
    },
    {
      name: "Contact",
      link: "/",
      icon: <ion-icon name="person-add-outline"></ion-icon>,
    },
    {
      name: "Term & Condition",
      link: "/",
      icon: <ion-icon name="newspaper-outline"></ion-icon>,
    },
    {
      name: "About Us",
      link: "/",
      icon: <ion-icon name="people-outline"></ion-icon>,
    },
    {
      name: "Login",
      link: "/login",
      icon: <ion-icon name="people-outline"></ion-icon>,
    },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white z-10">
      <div className="flex items-center justify-between p-2">

        <div className="flex items-center">
          <img
            src={image}
            alt="logo"
            className="logo"
            width={80}
            height={80}
          />
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {Links.map((link, index) => (
              <li key={index} className="text-xl">
                <a
                  href={link.link}
                  className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 "
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div className="hidden md:flex items-center space-x-4 text-red-700 ">
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

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <ion-icon
              name={isOpen ? "close-outline" : "menu-outline"}
              style={{ fontSize: "40px" }}
            ></ion-icon>
          </button>
        </div>
      </div>


      <div
        className={`md:hidden fixed inset-0 bg-white py-4 px-6 border-t border-gray-200 transition-transform duration-300 ease-in-out ${isOpen ? "transform translate-y-0" : "transform translate-y-full"
          }`}
      >
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
        <ul className="space-y-4 text-center">
          {Links.map((link, index) => (
            <li key={index} className="text-xl">
              <a
                href={link.link}
                className="flex items-center justify-center space-x-2 text-gray-800 hover:text-blue-600"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center space-x-4 text-red-700 gap-5">
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
