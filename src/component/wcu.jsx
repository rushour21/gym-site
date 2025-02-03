import React from 'react'

export default function wcu() {
  return (
    <div className='bg-gradient-to-b from-black via-gray-800 to-black py12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
            <div className='text-center mb-12'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-300 
                 via-indigo-300 to-teal-300 text-transparent bg-clip-text'>
                    Why Choose Us                     
                </h2>
                <p className='mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light'>
                    Discover Why we stand out with quality, commitment and result
                </p>
            </div>
            <div className='flex flex-col lg:flex-row items-start gap-12'>
                <div className='lg:w1/2 w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4 
                     lg:-ml-6 xl:ml-8 '>
                        {[
                            {
                                title: "Expert Trainer",
                                text: "Highly qualified trainers to help you achieve your goals.",
                            },
                            {
                                title: "Modern Equipment",
                                text: "Access to state-of-the-art fitness machines and tools.",
                            },
                            {
                                title: "Award Winning",
                                text: "Recognized for excellence in fitness services.",
                            },
                            {
                                title: "Community Driven",
                                text: "A supportive community that motivates you.",
                            },  
                        ].map((box, index) => (
                            <div key={index} className=' relative flex flex-col justify-center 
                             items-center space-x-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-gray-800 rounded-xl shadow-lg hover:scale-105 
                              transition-transform duration-300'>
                                <h4>{box.title}</h4>
                                <p>{box.text}</p>
                              </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
