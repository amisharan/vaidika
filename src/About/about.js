import React from 'react'
import image from "../Images/b2.jpg"
import image1 from "../Images/b8.jpg"
import image3 from "../Images/b6.jpeg"
import Footer from "../Footer/footer"

function about() {
    return (
        <div className="relative h-screen">
            <img src={image} alt="Diwali" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
                <div className=" text-white max-w-lg text-center font-poppins">
                    <h1 className=" text-4xl  md:text-5xl lg:text-5xl  font-bold font-Poppins">About Us</h1>
                    <div>
                        <h1 className="  sm:text-xs md:text-xl lg:text-2xl  mb-4 leading-tight ">
                            Our Management who are the driving force of the Organization
                        </h1>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-b from-red-50 to-red-300  min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16 py-8'>

                <div className='flex justify-center items-center'>
                    <img src={image1} alt='sample' className='w-full h-90 object-cover rounded-lg shadow-md' />


                </div>
                <div className='flex flex-col justify-center p-4 '>

                    <h1 className='text-3xl font-bold flex md:text-3xl lg:text-4xl mb-4'>About Puja Services


                    </h1>

                    <p className=' mt-4 text-sm md:text-base lg:text-lg leading-relaxed mb-4'>Puja Services is the Number One preferred Digital Platform for ALL Hindu Devotional needs and Spiritual services. Puja Services has been established to connect the current and future generations to Hinduism digitally (Web Portal, Android and iOS). In this age of Globalisation and Technology, the present and upcoming generations are moving away from their cultural roots. With the westernization taking over the culture, the age-old traditions, values and etiquettes are becoming extinct. To address these problems, Our attempt with Puja services is to ensure that the Origins, History, Culture of Hinduism are not forgotten and carry forwarded to generations to come and bringing them closer to spirituality. Our goal is to ensure that the roots and culture of Hinduism are preserved and carry forwarded for generations to come.</p>

                </div>


            </div>

            <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-red-300 to-red-50 h-screen p-4'>
                <div className='flex flex-col justify-center p-4'>
                    <h1 className='text-3xl font-bold   md:text-3xl lg:text-4xl'>Vision of Puja Services

                    </h1>
                    <p className=' mt-6 text-sm md:text-base lg:text-lg leading relaxed'>Our Vision is to bring "Inspiration and Devotion" to the <br />
                        younger/future generation towards Hindu Dharma with <br />the help of the state of art Information Technology.</p>
                    <div className='mt-4'>
                        <h1 className='text-3xl font-bold   md:text-3xl lg:text-4xl' >Mission of Puja Services</h1>
                        <p className=' mt-6 text-sm md:text-base lg:text-lg leading relaxed'>To bring all Spiritual Services and Traditions of Hindu <br />Dharma on to a Single Digital Platform.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={image3} alt='sample' className='w-full object-cover rounded-lg shadow-md' />


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default about