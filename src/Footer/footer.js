import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import image from "../Images/p51.png";

const items = [
    {
        name: "Facebook",
        icon: FaFacebook,
        link: 'https://facebook.com',
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        link: 'https://instagram.com',
    },
    {
        name: "Youtube",
        icon: FaYoutube,
        link: 'https://youtube.com',
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        link: 'https://twitter.com',
    },
    {
        name: "Linkedin",
        icon: FaLinkedin,
        link: 'https://linkedin.com',
    },
];

function Footer() {
    return (
        <div className="mt-24 bg-slate-900 text-white py-8 px-4">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center">

                <div className="w-full flex flex-col md:flex-row justify-center gap-2 md:gap-60">

                    <div className="text-center md:text-left">
                        <h6 className="font-bold uppercase pt-2">Quick Links</h6>
                        <ul>
                            <li>
                                <a href="/" className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h6 className="font-bold uppercase pt-2">Company policies</h6>
                        <ul>
                            <li>
                                <a
                                    href="/privacy-policy.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base"
                                >
                                    Privacy Policies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/seller-agreement.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="text-gray-500 hover:text-white cursor-pointer text-sm md:text-base"
                                >
                                    Seller Agreement
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6">
                    <div className="flex justify-center items-center gap-6 text-2xl">
                        {items.map((x, index) => (
                            <a
                                key={index}
                                href={x.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={x.name}
                                className="hover:text-white text-gray-400 transition-colors duration-300"
                            >
                                <x.icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full border-b-2 border-gray-600 mt-6"></div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-2">
                    <p className="text-gray-300 text-sm md:text-base">
                        © 2025 <span className="font-bold">Vaidika</span> — All Rights Reserved
                    </p>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-300 text-sm md:text-base">Powered by</span>
                        <img
                            src={image}
                            alt="P5 Digital Solutions Logo"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <a
                            href="https://p5digital.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold hover:underline"
                        >
                            Digital Solutions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;