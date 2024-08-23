import React from 'react'
import image1 from "../Images/ram.avif"
import image2 from "../Images/ram.avif"
import image3 from "../Images/g.avif"
import image4 from "../Images/4img.jpg"

const Link = [
    {

        id: 1,
        src: image1,
        alt: "img1",
        liveCount: "1M+ Live",
        title: "Ram Mandir Live Sho..."


    },
    {
        id: 2,
        src: image2,
        alt: "img1",
        liveCount: "1M+ Live",
        title: "Ram Mandir Live Sho..."

    },
    {
        id: 3,
        src: image3,
        alt: "img1",
        liveCount: "1M+ Live",
        title: "Ram Mandir Live Sho..."

    },
    {
        id: 4,
        src: image4,
        alt: "img1",
        liveCount: "1M+ Live",
        title: "Ram Mandir Live Sho..."

    },
];

function card() {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {Link.map((link) => (
                <div key={card.id} className='py-2 px-4 m-4'>
                    <div className='rounded overflow-hidden shadow-lg max-w-sm border-gray-300'>
                        <a href={link.link} className='rounded overflow-hidden shadow-lg max-w-sm border border-gray-300'>
                            {link.src}
                            {link.alt}
                            {link.liveCount}



                        </a>
                        <div className='p-4 '>
                            <h2 className='text-gray-500'>{link.liveCount}</h2></div>
                        <div>
                            <h3 className='font-bold ml-4'>{link.title}</h3>

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

export default card