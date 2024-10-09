import React from 'react'

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "Entrepreneur",
      quote: "MindCompass has been a game-changer for my business goals. I'm more focused and productive than ever!"
    },
    {
      name: "Mark T.",
      role: "Fitness Enthusiast",
      quote: "This app helped me stay on track with my fitness journey. The daily reminders are incredibly motivating."
    },
    {
      name: "Emily R.",
      role: "Student",
      quote: "Balancing studies and personal growth has never been easier. MindCompass keeps me accountable and inspired."
    }
  ]

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900">Here's What Our Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg">
              <p className="italic mb-4 text-blue-800">{testimonial.quote}</p>
              <p className="font-semibold text-blue-900">{testimonial.name}</p>
              <p className="text-sm text-blue-700">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialProof