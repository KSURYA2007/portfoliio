import React, { useState, useEffect } from 'react'
import { ViewportBorder } from './components/ViewportBorder'
import RetroNavigation from './components/RetroNavigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import FounderSection from './components/FounderSection'
import FreelanceSection from './components/FreelanceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  const [currentMode, setCurrentMode] = useState('developer')
  const [crtEnabled, setCrtEnabled] = useState(false)

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [])

  return (
    <div className={`min-h-screen bg-[#111111] text-[#F1F1F1] relative selection:bg-[#C5FF00] selection:text-black ${crtEnabled ? 'crt-overlay' : ''}`}>
      
      {/* Viewport Frame Border */}
      <ViewportBorder />

      {/* Floating Retro Navigation & Controls */}
      <RetroNavigation crtEnabled={crtEnabled} setCrtEnabled={setCrtEnabled} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* 1. Hero Section */}
        <HeroSection currentMode={currentMode} setCurrentMode={setCurrentMode} />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Education Timeline */}
        <EducationSection />

        {/* 5. Founder & Product Section */}
        <FounderSection />

        {/* 6. Freelance Availability */}
        <FreelanceSection />

        {/* 7. Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
