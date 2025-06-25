import React from 'react';
import image1 from "../Images/pandit.jpg";
import image2 from "../Images/outfit.jpg";
import image3 from "../Images/navratri.jpeg";
import image4 from "../Images/aarti.jpg";
import image5 from "../Images/murti.jpeg"

const Link = [
    {
        id: 1,
        src: image1,
        alt: "img1",
        title: "Hire pandit's on vaidika"
    },
    {
        id: 2,
        src: image2,
        alt: "img1",
        title: "Ritual wear on vaidika"
    },
    {
        id: 3,
        src: image3,
        alt: "img1",
        title: "Puja samagri shop on vaidika"
    },
    {
        id: 4,
        src: image4,
        alt: "img1",
        title: "Live aarti on vaidika"
    },
    {
        id: 5,
        src: image5,
        alt: "img1",
        title: "Murti on vaidika"
    },
];

function CardGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 auto-rows-fr">
            {Link.map((link) => (
                <div
                    key={link.id}
                    className="flex flex-col bg-white border-2 rounded overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                    <div className="relative w-full h-48">
                        <img
                            src={link.src}
                            alt={link.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                        <h3 className="font-bold text-lg">{link.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardGrid;
