import React from 'react'
import { PixelPointer, SpeechBubblePointer, GithubIcon, LinkedinIcon } from './PixelIcons'
import { playSound } from '../utils/audio'
import suryaPortrait from '../assets/surya-portrait-studio.png'

export default function HeroSection({ currentMode, setCurrentMode }) {
  const handleModeSwitch = (mode) => {
    if (mode !== currentMode) {
      playSound('switch')
      setCurrentMode(mode)
    }
  }

  const developerBio = "Building products, writing code, and transforming ideas into meaningful digital experiences through thoughtful engineering and design."
  const creativeBio = "Crafting intuitive digital interfaces, exploring playful retro aesthetics, and designing experiences that bridge software engineering and creative expression."

  return (
    <section id="hero" className="relative w-full flex items-start justify-center px-4 sm:px-8 lg:px-14 pt-6 sm:pt-8 lg:pt-10 pb-16 lg:pb-24">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start lg:items-center">

        {/* ─── LEFT COLUMN: PORTRAIT & SPEECH BUBBLE ─── */}
        <div className="lg:col-span-5 flex flex-col items-center justify-start relative">

          {/* Pixel Speech Bubble */}
          <div className="relative mb-1 sm:mb-2 z-20 transition-transform duration-200 hover:-translate-y-1">
            <div className="bg-black border-2 border-white px-4 sm:px-5 py-2 sm:py-2.5 shadow-[3px_3px_0px_0px_#FFFFFF]">
              <span className="font-pixel text-xs sm:text-[14px] text-[#C5FF00] tracking-wider uppercase inline-block">
                I'm Surya Kanagaraj
              </span>
            </div>
            {/* Pixel Pointer Tail */}
            <SpeechBubblePointer />
          </div>

          {/* Profile Portrait Container */}
          <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] flex justify-center">

            {/* Realistic Portrait Image (Seamless blending into #111111 without card borders) */}
            <div className="relative w-full overflow-hidden">
              <img
                src={suryaPortrait}
                alt="Surya - Full Stack Developer & Founder"
                className="w-full h-auto object-cover object-top select-none transition-all duration-300"
                loading="eager"
              />
              {/* Bottom gradient fade into viewport background */}
              <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-transparent pointer-events-none" />
              {/* Left and right soft blends */}
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-8 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
            </div>

            {/* Retro 8-bit status badge on portrait */}
            <div className="absolute bottom-1 sm:bottom-2 left-2 sm:left-6 z-20 flex items-center gap-1.5 sm:gap-2 bg-[#161616]/90 border border-[#2B2B2B] px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-pixel-ui text-[#8E8E93] shadow-md backdrop-blur-sm">
              <span className="w-2 h-2 rounded-none bg-[#C5FF00] animate-pulse" />
              <span className="text-[#F1F1F1]">ONLINE</span>
              <span className="text-[#555555]">|</span>
              <span className="text-[#FFC83D]">R2C FOUNDER</span>
              <span className="text-[#555555]">|</span>
              <span className="text-[#C5FF00] font-bold">20+ PROJECTS DONE</span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: EDITORIAL HEADLINE & MODES ─── */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 lg:pl-6">

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-[#F1F1F1] leading-[1.08] tracking-tight">
              Turning Ideas into Memorable Digital Experiences.
            </h1>

            {/* Dynamic Intro Description based on active mode */}
            <p className="text-[#8E8E93] text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-2xl transition-all duration-300">
              {currentMode === 'developer' ? developerBio : creativeBio}
            </p>
          </div>

          {/* Mode Selector */}
          <div className="pt-2 space-y-3">
            <div className="font-pixel text-[11px] text-[#666666] tracking-widest uppercase">
              // SELECT INTERACTIVE MODE
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-1">

              {/* Developer Mode */}
              <button
                type="button"
                onClick={() => handleModeSwitch('developer')}
                className={`group flex items-center gap-3.5 text-left cursor-pointer transition-all duration-150 ${currentMode === 'developer'
                  ? 'text-[#C5FF00]'
                  : 'text-[#8E8E93] hover:text-[#F1F1F1]'
                  }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  {currentMode === 'developer' ? (
                    <PixelPointer active={true} className="w-4 h-4 text-[#C5FF00]" />
                  ) : (
                    <div className="w-2 h-2 bg-[#333333] group-hover:bg-[#666666]" />
                  )}
                </div>
                <span className="font-pixel text-xs sm:text-sm tracking-wide">
                  Developer Mode
                </span>
              </button>

              {/* Creative Mode */}
              <button
                type="button"
                onClick={() => handleModeSwitch('creative')}
                className={`group flex items-center gap-3.5 text-left cursor-pointer transition-all duration-150 ${currentMode === 'creative'
                  ? 'text-[#C5FF00]'
                  : 'text-[#8E8E93] hover:text-[#F1F1F1]'
                  }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  {currentMode === 'creative' ? (
                    <PixelPointer active={true} className="w-4 h-4 text-[#C5FF00]" />
                  ) : (
                    <div className="w-2 h-2 bg-[#333333] group-hover:bg-[#666666]" />
                  )}
                </div>
                <span className="font-pixel text-xs sm:text-sm tracking-wide">
                  Creative Mode
                </span>
              </button>
            </div>
          </div>

          {/* Quick CTA Actions & Social Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#founder"
              onClick={() => playSound('blip')}
              className="bg-[#C5FF00] hover:bg-[#b0e600] text-black font-pixel text-[11px] px-5 py-3.5 tracking-wider transition-all shadow-[3px_3px_0px_0px_#FFFFFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              EXPLORE PRODUCTS ▶
            </a>
            <a
              href="#contact"
              onClick={() => playSound('blip')}
              className="border border-[#333333] hover:border-[#FFC83D] text-[#F1F1F1] hover:text-[#FFC83D] font-pixel text-[11px] px-5 py-3.5 tracking-wider transition-all bg-[#161616]/60 hover:bg-[#1a1a1a]"
            >
              GET IN TOUCH
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              <a
                href="https://github.com/KSURYA2007"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('blip')}
                className="group flex items-center gap-2 border border-[#333333] hover:border-[#C5FF00] bg-[#161616]/80 hover:bg-[#1f1f1f] text-[#8E8E93] hover:text-[#C5FF00] font-pixel-ui text-xs px-3.5 py-3 transition-all"
                title="GitHub: KSURYA2007"
              >
                <GithubIcon className="w-4 h-4 text-[#8E8E93] group-hover:text-[#C5FF00] transition-colors" />
                <span className="hidden sm:inline">GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/surya-kanagaraj-4b282931a/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('blip')}
                className="group flex items-center gap-2 border border-[#333333] hover:border-[#FFC83D] bg-[#161616]/80 hover:bg-[#1f1f1f] text-[#8E8E93] hover:text-[#FFC83D] font-pixel-ui text-xs px-3.5 py-3 transition-all"
                title="LinkedIn: Surya Kanagaraj"
              >
                <LinkedinIcon className="w-4 h-4 text-[#8E8E93] group-hover:text-[#FFC83D] transition-colors" />
                <span className="hidden sm:inline">LINKEDIN</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
