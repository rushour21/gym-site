import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'; 

export default function youropinions() {
    const reviews = [
        {
            name: "Hexagon",
            text: "Exceptional support and quality! The team went above and beyond to ensure everything was perfect. Highly recommended for anyone seeking top-notch service.",
            stars: 4.5,
            color: "text-blue-500",
        },
        {
            name: "Digital",
            text: "Incredible experience! Highly recommend to everyone. Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            stars: 4,
            color: "text-purple-500",
        },
        {
            name: "Services",
            text: "Great platform with some room for improvement. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 3.5,
            color: "text-green-500",
        },
        {
            name: "Momentum",
            text: "Amazing facilities and trainers. They truly care about your fitness journey.",
            stars: 5,
            color: "text-yellow-500",
        },
        {
            name: "Pulse",
            text: "Fantastic support system and modern equipment. I couldn’t ask for more!",
            stars: 4.5,
            color: "text-red-500",
        },
        {
            name: "Zenith",
            text: "The community atmosphere is truly inspiring! A perfect place to grow.",
            stars: 4.8,
            color: "text-indigo-500",
        },
    ];

  return (
    <div id="opinions" className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-12 px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Community Opinions
            </h2>
            <p className="text-gray-400 text-lg mt-2">What people think about us</p>
        </div>

  {/* REVIEWS SECTION */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {reviews.map((review, index) => (
        <div key={index} className='bg-gradient-to-br from-gray-800 to-gray-900 border
         border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300
          transform hover:scale-105'>
            <FaQuoteLeft className={`${review.color} text3xl `}/>
            <h3 className='text-xl font-semibold text-white mt-4'>
                {review.name}
            </h3>
            <div className=' flex items-center mt-2 mb-4 text-yellow-400 text-xl '>
                {Array.from({length: Math.floor(review.stars)}).map((_,i) => (
                    <FaStar key={i} />
                ))}
                {review.stars % 1 !== 0 && <FaStarHalfAlt/> }
            </div>
            <p className='text-gray-400 text-sm italic'>
                {review.text}
            </p>
            <FaQuoteRight className= {`${review.color} text-3xl float-right mt-4 `} />
        </div>
    ))}
  </div>
  <div className='mt-10 flex flex-col items-center space-y-6'>
    <div className='flex items-center space-x-4'>
        <button className='p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110'>
        <CircleChevronLeft />
     </button>

    <button className='p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transition-transform duration-300 transform hover:scale-110'>
      <CircleChevronRight />
    </button>
  </div>

  {/* ADD OPTION */}
  <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full shadow-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-110 transition-transform duration-300'>
    +Add Your Opinion
  </button>
</div>

</div>

  )
}
