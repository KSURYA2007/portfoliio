import React from 'react'
import { playSound } from '../utils/audio'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-8 lg:px-14 border-t border-[#222222]">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#222222] pb-6">
          <div className="space-y-2">
            <div className="font-pixel text-[11px] text-[#C5FF00] tracking-widest uppercase">
              // 01. PROFILE OVERVIEW
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F1F1]">
              About Me
            </h2>
          </div>
          <div className="font-pixel-ui text-xs text-[#8E8E93]">
            LOCATION: INDIA // SYSTEM: ACTIVE
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Card */}
          <div
            onMouseEnter={() => playSound('blip')}
            className="lg:col-span-7 bg-[#161616] border border-[#282828] p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_0px_rgba(255,200,61,0.2)]"
          >
            <div className="flex items-center justify-between border-b border-[#262626] pb-3">
              <span className="font-pixel text-[11px] text-[#FFC83D]">BIO.DATA</span>
              <span className="font-pixel-ui text-[11px] text-[#666666]">CSE_UNDERGRAD</span>
            </div>
            
            <p className="text-[#F1F1F1] text-base sm:text-lg leading-relaxed font-sans">
              I am a Computer Science and Engineering student, full-stack developer, and founder of Right 2 Creation. I enjoy building practical digital products and transforming ideas into working software experiences.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="bg-[#1F1F1F] text-[#C5FF00] font-pixel-ui text-xs px-3 py-1.5 border border-[#333333]">
                Full Stack Developer
              </span>
              <span className="bg-[#1F1F1F] text-[#FFC83D] font-pixel-ui text-xs px-3 py-1.5 border border-[#333333]">
                Founder @ Right 2 Creation
              </span>
              <span className="bg-[#1F1F1F] text-[#F1F1F1] font-pixel-ui text-xs px-3 py-1.5 border border-[#333333]">
                Product Builder
              </span>
            </div>

            {/* Highlighted Projects Done Banner */}
            <div className="pt-2">
              <div className="p-4 bg-[#111111] border-2 border-[#C5FF00] shadow-[3px_3px_0px_0px_#C5FF00] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1A2610] border border-[#C5FF00] flex items-center justify-center font-pixel text-xs text-[#C5FF00]">
                    20+
                  </div>
                  <div>
                    <div className="font-headline text-lg sm:text-xl font-extrabold text-[#F1F1F1] flex items-center gap-2">
                      <span className="text-[#C5FF00]">20+ Projects</span> Completed
                    </div>
                    <div className="font-pixel-ui text-[11px] text-[#8E8E93]">
                      Built and delivered across full-stack web, cloud, and digital utilities
                    </div>
                  </div>
                </div>
                <span className="hidden sm:inline-block font-pixel text-[10px] text-[#C5FF00] bg-[#1A1A1A] px-2.5 py-1 border border-[#333333]">
                  DELIVERED
                </span>
              </div>
            </div>
          </div>

          {/* Academic Status Card */}
          <div className="lg:col-span-5 bg-[#161616] border border-[#282828] p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_0px_rgba(197,255,0,0.2)]">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3">
              <span className="font-pixel text-[11px] text-[#C5FF00]">ACADEMIC STATUS</span>
              <span className="font-pixel text-[11px] text-[#FFC83D]">VERIFIED</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-[#8E8E93] font-pixel-ui uppercase">Degree</div>
                <div className="text-base sm:text-lg font-bold text-[#F1F1F1] pt-0.5">
                  Bachelor of Engineering (B.E.)
                </div>
                <div className="text-sm text-[#8E8E93]">
                  Computer Science and Engineering
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#262626]">
                <div>
                  <div className="text-xs text-[#8E8E93] font-pixel-ui uppercase">Current Status</div>
                  <div className="text-sm sm:text-base font-semibold text-[#C5FF00] pt-0.5">
                    Pre-final year student
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#8E8E93] font-pixel-ui uppercase">Cumulative CGPA</div>
                  <div className="text-2xl font-bold font-headline text-[#FFC83D] pt-0.5 flex items-baseline gap-1">
                    8.7 <span className="text-xs text-[#8E8E93] font-sans">/ 10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Retro progress bar */}
            <div className="pt-2">
              <div className="flex justify-between text-[11px] font-pixel-ui text-[#8E8E93] pb-1.5">
                <span>ACADEMIC PERFORMANCE</span>
                <span className="text-[#FFC83D]">87%</span>
              </div>
              <div className="w-full bg-[#202020] h-2.5 rounded-none p-0.5 border border-[#333333]">
                <div className="bg-gradient-to-r from-[#FFC83D] to-[#C5FF00] h-full" style={{ width: '87%' }} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
