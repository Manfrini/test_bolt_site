import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  )
}

export default App