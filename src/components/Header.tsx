import React from 'react'
import { Compass } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Compass className="w-8 h-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-900">MindCompass</span>
        </div>
      </div>
    </header>
  )
}

export default Header