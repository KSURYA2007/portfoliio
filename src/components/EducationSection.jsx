import React from 'react'
import { playSound } from '../utils/audio'

export default function EducationSection() {
  const schoolMilestones = [
    { grade: 'Class 10', year: '2021–2022', note: 'Secondary School Leaving Certificate (SSLC)' },
    { grade: 'Class 11', year: '2022–2023', note: 'Higher Secondary First Year (Computer Science stream)' },
    { grade: 'Class 12', year: '2023–2024', note: 'Higher Secondary Examination (HSC Completed)' },
  ]

  return (
    <section id="education" className="relative py-20 px-4 sm:px-8 lg:px-14 border-t border-[#222222]">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#222222] pb-6">
          <div className="space-y-2">
            <div className="font-pixel text-[11px] text-[#C5FF00] tracking-widest uppercase">
              // 03. ACADEMIC JOURNEY
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F1F1]">
              Education Timeline
            </h2>
          </div>
          <div className="font-pixel-ui text-xs text-[#8E8E93]">
            TIMELINE: 2012 – PRESENT
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ─── HIGHER EDUCATION (CURRENT) ─── */}
          <div className="lg:col-span-5 bg-[#161616] border-2 border-[#C5FF00] p-6 sm:p-8 space-y-6 shadow-[5px_5px_0px_0px_#C5FF00]">
            <div className="flex items-center justify-between border-b border-[#282828] pb-3">
              <span className="font-pixel text-[11px] text-[#C5FF00]">// CURRENT DEGREE</span>
              <span className="font-pixel-ui text-xs bg-[#C5FF00] text-black px-2 py-0.5 font-bold">
                ENROLLED
              </span>
            </div>

            <div className="space-y-3">
              <div className="font-pixel-ui text-xs text-[#FFC83D]">HIGHER EDUCATION</div>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#F1F1F1]">
                Bachelor of Engineering (B.E.)
              </h3>
              <p className="text-base text-[#8E8E93] font-sans">
                Department of Computer Science and Engineering
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#111111] border border-[#2B2B2B]">
              <div>
                <span className="font-pixel-ui text-[11px] text-[#8E8E93] block">STATUS</span>
                <span className="font-bold text-sm text-[#F1F1F1] pt-1 block">
                  Pre-final year student
                </span>
              </div>
              <div>
                <span className="font-pixel-ui text-[11px] text-[#8E8E93] block">CGPA</span>
                <span className="font-headline text-2xl font-bold text-[#FFC83D] pt-0.5 block">
                  8.7 <span className="text-xs text-[#8E8E93] font-sans">/ 10</span>
                </span>
              </div>
            </div>

            <div className="text-xs font-pixel-ui text-[#8E8E93] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C5FF00]" />
              <span>CORE FOCUS: DATA STRUCTURES, FULL STACK & CLOUD</span>
            </div>
          </div>

          {/* ─── SCHOOL EDUCATION (2012–2024) ─── */}
          <div className="lg:col-span-7 bg-[#161616] border border-[#2B2B2B] p-6 sm:p-8 space-y-6 shadow-[5px_5px_0px_0px_rgba(255,200,61,0.25)]">
            
            {/* School Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#282828] pb-4">
              <div>
                <div className="font-pixel-ui text-xs text-[#FFC83D]">SCHOOL EDUCATION</div>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#F1F1F1] pt-1">
                  Sri Sankara Metric HR. SEC. School, Peralam
                </h3>
              </div>
              <div className="font-pixel text-[11px] text-[#C5FF00] bg-[#1F1F1F] px-3 py-1 border border-[#333333] self-start sm:self-auto">
                2012–2024
              </div>
            </div>

            {/* School Milestone Timeline Steps */}
            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#2B2B2B]">
              {schoolMilestones.map((item) => (
                <div
                  key={item.grade}
                  onMouseEnter={() => playSound('blip')}
                  className="relative group transition-all duration-150"
                >
                  {/* Pixel Timeline Bullet */}
                  <div className="absolute -left-[27px] top-1.5 w-3 h-3 bg-[#111111] border-2 border-[#FFC83D] group-hover:bg-[#FFC83D] transition-colors" />

                  <div className="bg-[#111111] border border-[#262626] group-hover:border-[#FFC83D]/50 p-4 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="font-pixel text-xs text-[#FFC83D] font-bold">
                        {item.grade}
                      </span>
                      <span className="font-pixel-ui text-xs text-[#C5FF00] bg-[#1A1A1A] px-2 py-0.5 border border-[#333333]">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs text-[#8E8E93] pt-1.5 font-sans">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
