import React from 'react'
import { FaDumbbell, FaFacebook, FaHeartbeat, FaInstagram, FaPlay, FaRunning, FaTwitter, FaMedal, FaCertificate, FaUser } from 'react-icons/fa'
import bgimage from '../assets/bannertop.png';

export default function banner() {
  return (
    <div>
      <div id='home' className='relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row
       items-center justify-center lg:justify-between'>
        <div className='relative z-10 flex flex-col justify-center
         items-start px-6 sm:px-10 lg:px-20v text-white bg-gradient-to-r from-black via-transparent h-full w-full lg:w-1/2 '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-slideInLeft text-center lg:text-left'>
                Elevate your <span className='text-yellow-500'>Workout</span>
            </h1>
            <p className='text-sm sm:text-base md:text-lg mb-8 animate-slideInLeft delay-200 
             text-center lg:text-left '>
                Transform your fitness journey with professional guidence and advanced techniques.
                Push your limits every day and achieve your dream body with customized plans.
             </p>
             <div className='flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fadeIn delay-400'>
                <div className='flex items-center gap-3 group'>
                    <FaDumbbell className='text-yellow-500 text-2xl sm:text-3xl transition-transform 
                     transform group-hover:rotate-12 group-hover:scale-110'/>
                     <span className='text-sm sm:text-lg font-medium'>Strenght Training</span>
                </div>
                <div className='flex items-center gap-3 group'>
                    <FaHeartbeat className='text-yellow-500 text-2xl sm:text-3xl transition-transform 
                     transform group-hover:rotate-12 group-hover:scale-110'/>
                     <span className='text-sm sm:text-lg font-medium'>Cardio Fitness</span>
                </div>
                <div className='flex items-center gap-3 group'>
                    <FaRunning className='text-yellow-500 text-2xl sm:text-3xl transition-transform 
                     transform group-hover:rotate-12 group-hover:scale-110'/>
                     <span className='text-sm sm:text-lg font-medium'>Endurance</span>
                </div>
             </div>
             <div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-6'>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold 
                 rounded-full shadow-md hover:bg-yellow-500 transition-transform transform" >
                Get Started</button>
                <button className='px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-full shadow-md 
                 hover:bg-gray-100 transition-transform transform hover:scale-105 delay-700 flex items-center gap-3'>
                  <FaPlay className='text-black text-xl'/>
                  Watch Demo  
                 </button>
             </div>
             <div className='flex gap-6 animate-fadeIn delay800 justify-center lg:justify-start'>
                <a href="#" aria-label='Facebook' className='text-blue-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110'>
                    <FaFacebook/>
                </a>
                <a href="#" aria-label='instagram' className='text-red-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110'>
                    <FaInstagram/>
                </a>
                <a href="#" aria-label='twitter' className='text-blue-500 text-2xl sm:text-3xl transition-transform transform hover:scale-110'>
                    <FaTwitter/>
                </a>
             </div>             
        </div>
        <div className='absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center items-center'>
                <img src={bgimage} alt=""  className='h-full w-full object-contain opacity-80 animate-zoomInSlow'/>
        </div>
      </div>
      <div className='bg-black py-12 sm:py-16 text-white'>
            <div className='container mx-auto px-4 sm:px-8 text-center '>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12'>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-200'>
                        <FaMedal className='text-yellow-500 text-3xl sm:text-4xl' />
                        <span className='text-sm sm:text-lg md-text-xl font-semibold '>
                            5+ Years of Services
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-200'>
                        <FaCertificate className='text-yellow-500 text-3xl sm:text-4xl' />
                        <span className='text-sm sm:text-lg md-text-xl font-semibold '>
                            50+ Certified Trainers
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-200'>
                        <FaUser className='text-yellow-500 text-3xl sm:text-4xl' />
                        <span className='text-sm sm:text-lg md-text-xl font-semibold '>
                            1000+ Happy Members
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-200'>
                        <FaMedal className='text-yellow-500 text-3xl sm:text-4xl' />
                        <span className='text-sm sm:text-lg md-text-xl font-semibold '>
                            95% Customer Satisfaction
                        </span>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
