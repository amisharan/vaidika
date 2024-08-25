import React from 'react'
import image1 from "../Images/pandit.jpg";
import image2 from "../Images/pandit2.jpg";
import image3 from "../Images/pandit3.avif";
import image4 from "../Images/pandit3.avif";

const Link = [
    {
        id: 1,
        src: image1,
        alt: "img1",
        liveCount: "30 years+",
        title: "Jai Prakash Mishra"

    },
    {
        id: 2,
        src: image2,
        alt: "img1",
        liveCount: "30 years+",
        title: "Jai Prakash Mishra"

    },
    {
        id: 3,
        src: image3,
        alt: "img1",
        liveCount: "30 years+",
        title: "Jai Prakash Mishra"

    },
    {
        id: 4,
        src: image4,
        alt: "img1",
        liveCount: "30 years+",
        title: "Jai Prakash Mishra"

    },
];
function cardgrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {Link.map((link) => (
                <div key={cardgrid.id} className='py-2 px-4 m-4'>
                    <div className='rounded overflow-hidden shadow-lg max-w-sm border-gray-300 '>
                        {/* <img src={link.src} alt={link.alt} /> */}
                        <div className='relative w-full h-48'> {/* Adjust h-48 to desired height */}
                            <img
                                src={link.src}
                                alt={link.alt}
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                        </div>
                        <a href={link.link} className='rounded overflow-hidden shadow-lg max-w-sm border border-gray-300'>
                            {/* {link.src}
                            {link.alt}
                            {link.liveCount} */}



                        </a>
                        <div className='p-4 '>
                            <h2 className='text-gray-500'>{link.liveCount}</h2></div>
                        <div>
                            <h3 className='font-bold ml-4 '>{link.title}</h3>

                        </div>
                        <div className='flex item-center justify-center mb-2'>
                            <button className="bg-white text-red-800 font-bold sm:px-6 sm:py-3 rounded-full border-2 border-red-800 w-full sm:w-auto">
                                Try Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}


        </div>


    );
}

export default cardgrid