import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function footer() {
  return (
    <>
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6" id="contact">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-3xl lg:max-w-5xl grid lg:grid-cols-2 gap-8"
                >
                    {/* Address Section */}
                    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
                            Get in Touch
                        </h2>

                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-6 h-6 text-blue-400" />
                                <p className="text-lg font-medium">Gym Street, Fitness City, LKO</p>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center space-x-3">
                                <Phone className="w-6 h-6 text-blue-400" />
                                <p className="text-lg font-medium">+91 1234213000</p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-3">
                                <Mail className="w-6 h-6 text-blue-400" />
                                <p className="text-lg font-medium">contact@gym.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="bg-gray-900 p-6 rounded-2xl space-y-6"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                            Contact Us
                        </h2>

                        <div>
                            <label className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter Your Name" 
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter Your Email" 
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea 
                                placeholder="Enter Your Message" 
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full p-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-200 font-medium text-white"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </motion.div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white font-poppins">
                <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Brand Section */}
                    <div>
                        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-extrabold tracking-wider">
                            Fitlife Gym
                        </h1>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                            Empowering lives through fitness. Join us on a journey to achieve a healthier and stronger version of you.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">
                            Quick Links
                        </h2>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition duration-200">About Us</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition duration-200">Services</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition duration-200">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">
                            Follow Us
                        </h2>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-200">Instagram</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-200">Facebook</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-200">Twitter</a></li>
                        </ul>
                    </div>

                </div>  
                <div className="bg-gray-900 text-gray-500 text-center py-4">
                    <p>© 2025 Fitlife Gym. All rights reserved.</p>
                    <p className="text-white hover:text-purple-400 cursor-pointer">
                        HexagonDigitalServices
                    </p>
                </div>
            </footer>
    </>
  )
}
