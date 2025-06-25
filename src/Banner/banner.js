import React from "react";
import image from "../Images/diya.jpg";
import '@fontsource/roboto/700.css';

const Banner = () => {
  return (
    <div className="relative h-screen">
      <img src={image} alt="Diwali" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-end p-4 md:p-8 lg:p-12">
        <div className="text-right text-white max-w-lg">
          <h1 className="text-3xl font-Poppins font-bold sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Watch Live Aarti on the Vaidika
          </h1>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.vaidika.puja_store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-transparent text-white font-bold px-4 sm:px-6 py-2 sm:py-3 border border-white rounded-full hover:bg-red-700 hover:border-transparent transition duration-300 w-full sm:w-auto">
                Download
              </button>
            </a>
          </div>
        </div>
        {/* Bottom-right corner credit */}
        <div className="absolute bottom-4 right-4 text-sm sm:text-base text-white italic">
          <a
            href="https://p5digital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-300 transition duration-300"
          >
            P5 Digital Solution
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
