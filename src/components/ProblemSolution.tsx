import React from 'react'
import { Target, Zap, TrendingUp } from 'lucide-react'

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      problem: "Difficulty defining clear goals",
      solution: "MindCompass guides you through setting SMART goals and connecting them to your North Star."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      problem: "Lack of motivation to stay consistent",
      solution: "Receive personalized reminders and motivational prompts to keep you on track."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      problem: "Struggling to track progress easily",
      solution: "Our intuitive dashboard and simple check-ins make progress tracking effortless."
    }
  ]

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">Struggling to Stay on Track? We've Got You Covered.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.problem}</h3>
              <p className="text-gray-600">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemSolution