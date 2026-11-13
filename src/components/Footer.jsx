import React from 'react'
import { playSound } from '../utils/audio'

export default function Footer() {
  const currentYear = 2026

  return (
    <footer className="relative py-12 px-4 sm:px-8 lg:px-14 border-t border-[#222222] bg-[#0C0C0C]">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#1A1A1A] border border-[#FFC83D] flex items-center justify-center font-pixel text-[11px] text-[#FFC83D]">
            S
          </div>
          <div>
            <div className="font-pixel text-xs text-[#F1F1F1]">SURYA // PORTFOLIO</div>
            <div className="text-[11px] text-[#8E8E93] font-sans">
              Founder @ Right 2 Creation
            </div>
          </div>
        </div>

        {/* Center links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-pixel-ui text-[#8E8E93]">
          <a
            href="https://github.com/KSURYA2007"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('blip')}
            className="hover:text-[#C5FF00] transition-colors"
          >
            GITHUB ↗
          </a>
          <span className="text-[#333333]">|</span>
          <a
            href="https://www.linkedin.com/in/surya-kanagaraj-4b282931a/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('blip')}
            className="hover:text-[#FFC83D] transition-colors"
          >
            LINKEDIN ↗
          </a>
          <span className="text-[#333333]">|</span>
          <a
            href="https://right2creation.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('blip')}
            className="hover:text-[#FFFFFF] transition-colors"
          >
            RIGHT2CREATION.IN ↗
          </a>
          <span className="text-[#333333]">|</span>
          <a
            href="https://fwdpdf.right2creation.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('blip')}
            className="hover:text-[#C5FF00] transition-colors"
          >
            FWD PDF ↗
          </a>
        </div>

        {/* Right status */}
        <div className="flex items-center gap-2 font-pixel-ui text-xs text-[#8E8E93]">
          <span className="w-2 h-2 bg-[#C5FF00]" />
          <span>ALL SYSTEMS OPERATIONAL © {currentYear}</span>
        </div>

      </div>
    </footer>
  )
}

