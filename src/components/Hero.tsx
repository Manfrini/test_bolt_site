import React from 'react'

const Hero: React.FC = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Define Your Goals. Track Your Success.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              MindCompass helps you set clear goals, stay motivated, and reach your long-term vision through personalized tracking and actionable steps.
            </p>
            <button 
              onClick={scrollToCTA}
              className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              Join the Beta
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="MindCompass App Screenshot" 
                className="w-full rounded-md shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero