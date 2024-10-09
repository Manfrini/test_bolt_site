import React from 'react'
import { Star, CheckSquare, Bell, BarChart, Calendar } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Define Your North Star",
      description: "Helps you define your broader purpose and long-term vision."
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-green-500" />,
      title: "Track Key Results Easily",
      description: "Simple progress monitoring with personalized questions for each Key Result."
    },
    {
      icon: <Bell className="w-12 h-12 text-red-500" />,
      title: "Receive Motivational Reminders",
      description: "Get inspiring notifications and reminders to stay focused."
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-500" />,
      title: "Visual Progress",
      description: "Clear dashboard to see your progress at a glance."
    },
    {
      icon: <Calendar className="w-12 h-12 text-purple-500" />,
      title: "Set & Forget",
      description: "Set clear goals with precise deadlines and let MindCompass remind you of the rest."
    }
  ]

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">Powerful Features to Keep You Moving Forward</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features