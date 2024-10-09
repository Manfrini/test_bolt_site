import React from 'react'

const CTA: React.FC = () => {
  const handleJoinBeta = () => {
    // Placeholder for future functionality
    console.log('Join Beta clicked')
  }

  return (
    <div id="cta-section" className="bg-gray-100 text-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Defining Your Future Today</h2>
        <p className="mb-8 text-gray-600">Join our beta and be among the first to experience MindCompass</p>
        <button
          onClick={handleJoinBeta}
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300 hover:bg-blue-700"
        >
          Join the Beta
        </button>
      </div>
    </div>
  )
}

export default CTA