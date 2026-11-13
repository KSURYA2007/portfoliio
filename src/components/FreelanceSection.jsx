import React from 'react'
import { playSound } from '../utils/audio'

export default function FreelanceSection() {
  return (
    <section id="freelance" className="relative py-20 px-4 sm:px-8 lg:px-14 border-t border-[#222222]">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Availability Box */}
        <div className="bg-[#161616] border-2 border-[#C5FF00] p-8 sm:p-12 text-center space-y-6 shadow-[6px_6px_0px_0px_#C5FF00] relative">
          
          {/* Pixel status badge */}
          <div className="inline-flex items-center gap-2 bg-[#1F1F1F] border border-[#333333] px-3.5 py-1.5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-none bg-[#C5FF00] animate-ping" />
            <span className="font-pixel text-[11px] text-[#C5FF00] tracking-wider">
              CURRENT STATUS: AVAILABLE
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1]">
              Open to Freelance Opportunities
            </h2>
            <p className="text-base sm:text-lg text-[#8E8E93] max-w-2xl mx-auto font-sans leading-relaxed">
              Have an idea or project in mind? Let's connect and build something meaningful together.
            </p>
          </div>

          {/* Pixel CTA Button */}
          <div className="pt-4 flex justify-center">
            <a
              href="#contact"
              onClick={() => playSound('select')}
              className="group inline-flex items-center gap-3 bg-[#C5FF00] hover:bg-[#b0e600] text-black font-pixel text-xs sm:text-sm px-8 py-4 tracking-wider transition-all shadow-[4px_4px_0px_0px_#FFFFFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <span>Let's Work Together</span>
              <span className="group-hover:translate-x-1 transition-transform">▶</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

