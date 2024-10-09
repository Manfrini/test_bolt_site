import React from 'react'
import { Compass, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Compass className="w-8 h-8 mr-2 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MindCompass</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-600"><Facebook /></a>
              <a href="#" className="hover:text-blue-600"><Twitter /></a>
              <a href="#" className="hover:text-blue-600"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} MindCompass. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer