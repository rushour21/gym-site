import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function contact() {
  return (
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
                        className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-400 top-6 text-lg font-semibold  
                         hover:opacity-90 transition "
                    >
                        Send Message
                    </button>
                </motion.form>
            </motion.div>
        </div>
  )
}
