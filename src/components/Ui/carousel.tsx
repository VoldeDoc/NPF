import { Carousel } from 'flowbite-react';
import { MdArrowOutward } from "react-icons/md";

const images = [
    '/assets/images/help.jpg',
    //'/assets/images/family.png',
    '/assets/images/emergency-stop-sign.png'
];

export default function CarouselComponent() {
    return (
        <Carousel slideInterval={5000}>
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-screen bg-cover bg-center mt-10" style={{ backgroundImage: `url(${image})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="container mx-auto h-full flex items-center relative z-10 px-8 sm:px-16">
                        <div className="text-left sm:text-center bg-white bg-opacity-85 p-5 md:px-8 rounded-2xl">
                            <div className="text-3xl sm:text-5xl font-bold">
                                <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-5xl'  >Your <span className="text-green-800">Safety Net</span> for</h1>
                                <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-5xl' >Life's Uncertainties</h1>
                            </div>
                            <div className="my-1 text-lg sm:text-xl py-3">
                                <p className="text-gray-900">
                                    Protecting you and your loved ones with reliable
                                </p>
                                <p className="text-gray-900">
                                    coverage when you need it most.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 py-2 justify-center">
                                <button className="bg-green-800 rounded-full py-2 px-4 text-white hover:text-white hover:bg-green-800 transition duration-300">Get started</button>
                                <button className="flex items-center justify-center bg-transparent border border-green-800 rounded-full py-2 px-4 text-green-800 hover:bg-green-800 hover:text-white transition duration-300">
                                    Learn more
                                    <MdArrowOutward className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}