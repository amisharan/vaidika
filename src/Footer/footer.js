import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa"
import image from "../Images/p51.png";

const Sections = [
    {
        title: 'Use cases',
        items: ['UI Design', 'UX Design', 'Wireframing', 'Diagraming', 'Brainstroming', 'Online whiteboard', 'Team collaboration']
    },
    {
        title: 'Explore',
        items: ['Design', 'Prototyping', 'Development Features', 'Design system', 'collaboration features', 'Design process', 'Figjam']
    },
    {
        title: 'Resourcres',
        items: ['Blog', 'Best practices', 'Colors', 'Color wheel', 'Support', 'Developers', 'Resources library']
    },
]
const items = [
    {
        name: "Facebook",
        icon: FaFacebook,
        link: 'https://facebook.com'
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        link: 'https://instagram.com'
    },
    {
        name: "Youtube",
        icon: FaYoutube,
        link: 'https://youtube.com'
    },
    {
        name: "Twittwer",
        icon: FaTwitter,
        link: 'https://twitter.com'
    },
    {
        name: "Linkedin",
        icon: FaLinkedin,
        link: 'https://linkedin.com'
    },
]


function footer() {
    return (
        <>
            <div className=' mt-24 bg-slate-900 text-white py-8 px-4 '>



                <div className='max-w[1240px]   mx-auto grid grid-cols-1   md:grid-cols-3 lg:grid-cols-6 gap-6 border-b-2 border-gray-600 py-8'>
                    {
                        Sections.map((section, index) => (
                            <div key={index}>
                                <h6 className='font-bold uppercase pt-2'>
                                    {section.title}
                                </h6>
                                <ul>
                                    {section.items.map((item, i) => (
                                        <li key={i}
                                            className=' text-gray-500 hover:text-white cursor-pointer text-sm md:text-base'>
                                            {item}
                                        </li>
                                    )
                                    )}

                                </ul>

                            </div>
                        ))
                    }
                    <div className='col-span-1  md:col-span-3 lg:col-span-2 flex flex-col item-center text-center'>

                        <p className='uppercase font-semibold mb-2'>
                            Developed & Design
                        </p>
                        <div className="flex justify-center items-center">
                            <img
                                src={image}
                                alt="p5 digital solution"
                                className="w-20 h-20 object-cover rounded-md shadow-sm"
                            />
                        </div>
                        <h3 className='text-md font-semibold mb-2'>P5 Digital Soltution</h3>

                        <div className='flex  justify-between items-center sm:w-[300px] pt-4 text-2xl'>
                            {
                                items.map((x, index) => {
                                    return <x.icon key={index} className='hover:text-white cursor-pointer' />
                                })
                            }
                        </div>




                        {/* <button className='flex flex-col max-W  px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500  md:flex items-center space-x-4 text-whitw-700'>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </button> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default footer