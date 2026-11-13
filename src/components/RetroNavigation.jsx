import React, { useState, useEffect } from 'react'
import {
  PacmanIcon,
  PixelStar,
  PixelDiamond,
  SoundIcon,
  DeviceIcon,
  GamepadIcon,
  FolderIcon
} from './PixelIcons'
import { playSound, setSoundEnabled } from '../utils/audio'

const NAV_SECTIONS = [
  { id: 'hero', label: 'HERO' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'founder', label: 'FOUNDER & PRODUCT' },
  { id: 'freelance', label: 'FREELANCE' },
  { id: 'contact', label: 'CONTACT' },
]

export default function RetroNavigation({ crtEnabled, setCrtEnabled }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMuted, setIsMuted] = useState(true)
  const [showDeviceModal, setShowDeviceModal] = useState(false)
  const [easterEggActive, setEasterEggActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_SECTIONS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    playSound('blip')
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleToggleSound = () => {
    const nextState = !isMuted
    setIsMuted(nextState)
    setSoundEnabled(!nextState)
    if (!nextState) {
      setTimeout(() => playSound('select'), 50)
    }
  }

  const handleToggleGamepad = () => {
    playSound('blip')
    setCrtEnabled(!crtEnabled)
    setEasterEggActive(true)
    setTimeout(() => setEasterEggActive(false), 2000)
  }

  const handleFolderClick = () => {
    playSound('blip')
    const el = document.getElementById('founder')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ─── RIGHT-SIDE VERTICAL NAVIGATION ─── */}
      <nav
        aria-label="Section Navigation"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4 bg-[#141414]/80 backdrop-blur-sm border border-[#2B2B2B] px-2.5 py-4 rounded-none shadow-[2px_2px_0px_0px_#262626]"
      >
        {/* Top Pacman Icon */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="p-1 hover:scale-110 transition-transform cursor-pointer"
          title="Scroll to Top"
        >
          <PacmanIcon className="w-5 h-5 text-[#FFC83D]" />
        </button>

        <div className="w-4 h-[1px] bg-[#2E2E2E]" />

        {/* Vertical Pixel Indicators */}
        <div className="flex flex-col items-center gap-3">
          {NAV_SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => handleNavClick(sec.id)}
                className="group relative p-1.5 cursor-pointer flex items-center justify-center"
                aria-label={`Navigate to ${sec.label}`}
              >
                {/* Marker */}
                {isActive ? (
                  <div className="w-3.5 h-3.5 flex items-center justify-center text-[#FFC83D] scale-125 transition-transform">
                    <PixelDiamond className="w-3.5 h-3.5 text-[#FFC83D]" />
                  </div>
                ) : (
                  <div className="w-2.5 h-2.5 flex items-center justify-center text-[#666666] group-hover:text-[#FFC83D] transition-colors">
                    <PixelStar className="w-2.5 h-2.5" />
                  </div>
                )}

                {/* Hover Tooltip on Left */}
                <span className="absolute right-8 px-2 py-1 bg-black border border-white text-[10px] font-pixel text-[#C5FF00] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-[2px_2px_0px_0px_#FFFFFF]">
                  {sec.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* ─── BOTTOM-LEFT NAVIGATION CONTROLS (MATCHING SCREENSHOT) ─── */}
      <div
        className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-40 flex items-center gap-1.5 sm:gap-2 bg-[#141414]/95 backdrop-blur-sm border border-[#2B2B2B] p-1 sm:p-1.5 shadow-[2px_2px_0px_0px_#222222] scale-90 sm:scale-100 origin-bottom-left"
        role="toolbar"
        aria-label="Interactive Controls"
      >
        {/* 1. Sound Toggle */}
        <button
          type="button"
          onClick={handleToggleSound}
          className={`p-2 transition-colors cursor-pointer ${
            !isMuted
              ? 'bg-[#C5FF00] text-black'
              : 'text-[#8E8E93] hover:text-[#FFC83D] hover:bg-[#1F1F1F]'
          }`}
          title={isMuted ? 'Unmute 8-Bit Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          <SoundIcon muted={isMuted} className="w-4 h-4" />
        </button>

        {/* 2. Device Presentation Toggle */}
        <button
          type="button"
          onClick={() => {
            playSound('blip')
            setShowDeviceModal(true)
          }}
          className="p-2 text-[#8E8E93] hover:text-[#FFC83D] hover:bg-[#1F1F1F] transition-colors cursor-pointer"
          title="Responsive & Device Specs"
          aria-label="Device presentation details"
        >
          <DeviceIcon className="w-4 h-4" />
        </button>

        {/* 3. Gamepad / CRT Scanlines Toggle */}
        <button
          type="button"
          onClick={handleToggleGamepad}
          className={`p-2 transition-colors cursor-pointer ${
            crtEnabled
              ? 'bg-[#FFC83D] text-black'
              : 'text-[#8E8E93] hover:text-[#FFC83D] hover:bg-[#1F1F1F]'
          }`}
          title={crtEnabled ? 'Disable CRT Scanlines' : 'Enable CRT Retro Scanlines'}
          aria-label="Toggle CRT Scanline display"
        >
          <GamepadIcon className="w-4 h-4" />
        </button>

        {/* 4. Folder / Projects Navigation */}
        <button
          type="button"
          onClick={handleFolderClick}
          className="p-2 text-[#8E8E93] hover:text-[#C5FF00] hover:bg-[#1F1F1F] transition-colors cursor-pointer"
          title="Jump to Products & Projects"
          aria-label="Jump to Products"
        >
          <FolderIcon className="w-4 h-4" />
        </button>

        {/* Mini status indicator */}
        {easterEggActive && (
          <div className="absolute -top-9 left-0 bg-black border border-[#FFC83D] px-2 py-1 text-[10px] font-pixel text-[#FFC83D] whitespace-nowrap shadow-md">
            CRT FILTER: {crtEnabled ? 'ON' : 'OFF'}
          </div>
        )}
      </div>

      {/* ─── BOTTOM CENTER DOCK PILLS (MATCHING REFERENCE SCREENSHOT) ─── */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 hidden lg:flex items-center gap-2 bg-[#141414]/90 backdrop-blur-sm border border-[#2B2B2B] px-3 py-1.5 shadow-[2px_2px_0px_0px_#222222]">
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className={`px-3 py-0.5 text-[10px] font-pixel transition-colors ${
            activeSection === 'hero'
              ? 'bg-[#FFC83D] text-black font-bold'
              : 'text-[#8E8E93] hover:text-[#FFFFFF]'
          }`}
        >
          HERO
        </button>
        <button
          type="button"
          onClick={() => handleNavClick('about')}
          className={`px-3 py-0.5 text-[10px] font-pixel transition-colors ${
            activeSection === 'about'
              ? 'bg-[#FFC83D] text-black font-bold'
              : 'text-[#8E8E93] hover:text-[#FFFFFF]'
          }`}
        >
          ABOUT
        </button>
        <button
          type="button"
          onClick={() => handleNavClick('founder')}
          className={`px-3 py-0.5 text-[10px] font-pixel transition-colors ${
            activeSection === 'founder'
              ? 'bg-[#FFC83D] text-black font-bold'
              : 'text-[#8E8E93] hover:text-[#FFFFFF]'
          }`}
        >
          R2C
        </button>
      </div>

      {/* ─── DEVICE & RESPONSIVE MODAL ─── */}
      {showDeviceModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowDeviceModal(false)}
        >
          <div
            className="bg-[#151515] border-2 border-[#C5FF00] max-w-md w-full p-6 space-y-5 shadow-[6px_6px_0px_0px_#C5FF00]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#282828] pb-3">
              <span className="font-pixel text-xs text-[#C5FF00]">DEVICE_PRESENTATION.INFO</span>
              <button
                type="button"
                onClick={() => setShowDeviceModal(false)}
                className="text-[#8E8E93] hover:text-[#FFFFFF] font-pixel text-xs"
              >
                [X]
              </button>
            </div>

            <div className="space-y-3 font-sans text-xs text-[#8E8E93]">
              <p>
                <strong className="text-[#F1F1F1]">Responsive Design:</strong> Fully adaptive layout engineered for desktop, tablet, and mobile devices while preserving the pixel-art visual character.
              </p>
              <div className="p-3 bg-[#111111] border border-[#2B2B2B] space-y-1 font-mono text-[11px]">
                <div>• Viewport: Dynamic fluid scaling</div>
                <div>• Framework: React 19 + Tailwind CSS</div>
                <div>• Assets: Optimized WebP & High-Res PNG</div>
                <div>• Touch & Audio: Web Audio API integration</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDeviceModal(false)}
              className="w-full bg-[#C5FF00] text-black font-pixel text-xs py-2.5 transition-all shadow-[2px_2px_0px_0px_#FFFFFF]"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}
