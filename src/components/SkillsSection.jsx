import React from 'react'
import { playSound } from '../utils/audio'

export default function SkillsSection() {
  const verifiedSkills = [
    {
      name: 'Java',
      category: 'Backend & Core',
      level: 90,
      code: 'class Solution { ... }',
      tag: 'OBJECT-ORIENTED'
    },
    {
      name: 'PostgreSQL',
      category: 'Database & Relational',
      level: 88,
      code: 'SELECT * FROM data;',
      tag: 'ACID / SQL'
    },
    {
      name: 'AWS',
      category: 'Cloud & Infrastructure',
      level: 82,
      code: 'aws deploy --region',
      tag: 'CLOUD ARCH'
    },
    {
      name: 'JavaScript',
      category: 'Frontend & Full Stack',
      level: 92,
      code: 'const app = () => {}',
      tag: 'ES6+ / ASYNC'
    },
    {
      name: 'Python',
      category: 'Programming & Logic',
      level: 86,
      code: 'def execute(): pass',
      tag: 'SCRIPTING / AUTOMATION'
    },
    {
      name: 'Full Stack Developer',
      category: 'End-to-End Engineering',
      level: 94,
      code: 'client <-> api <-> db',
      tag: 'ARCHITECTURE'
    }
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-8 lg:px-14 border-t border-[#222222]">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#222222] pb-6">
          <div className="space-y-2">
            <div className="font-pixel text-[11px] text-[#C5FF00] tracking-widest uppercase">
              // 02. TECHNICAL PROFICIENCY
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F1F1]">
              Skills
            </h2>
          </div>
          <div className="font-pixel-ui text-xs text-[#8E8E93]">
            VERIFIED_MODULES: 6/6
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedSkills.map((skill, index) => (
            <div
              key={skill.name}
              onMouseEnter={() => playSound('blip')}
              className="group bg-[#161616] border border-[#282828] hover:border-[#C5FF00] p-6 space-y-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C5FF00]"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#242424] pb-3">
                <span className="font-pixel text-[11px] text-[#8E8E93] group-hover:text-[#FFC83D] transition-colors">
                  0{index + 1} //
                </span>
                <span className="font-pixel-ui text-[11px] text-[#C5FF00] bg-[#1F1F1F] px-2 py-0.5 border border-[#303030]">
                  {skill.tag}
                </span>
              </div>

              {/* Skill Name & Category */}
              <div>
                <h3 className="font-headline text-2xl font-bold text-[#F1F1F1] group-hover:text-[#FFFFFF] transition-colors">
                  {skill.name}
                </h3>
                <p className="font-pixel-ui text-xs text-[#8E8E93] pt-1">
                  {skill.category}
                </p>
              </div>

              {/* Code Snippet Pill */}
              <div className="bg-[#111111] border border-[#222222] px-3 py-1.5 font-mono text-xs text-[#8E8E93] flex items-center justify-between">
                <span>{skill.code}</span>
                <span className="text-[#C5FF00] font-pixel text-[9px]">OK</span>
              </div>

              

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

