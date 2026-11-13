import React from 'react'
import { playSound } from '../utils/audio'

export default function FounderSection() {
  const verifiedFeatures = [
    { title: 'Online PDF Editing', desc: 'Direct in-browser document editing with zero installation required.' },
    { title: 'Text & Document Editing', desc: 'AI smart typography alignment, font metric detection & paragraph reflow.' },
    { title: 'Vector Canvas & Layers', desc: 'Hardware-accelerated 60fps vector canvas for precision markup and shapes.' },
    { title: 'Digital Signatures', desc: 'Handwritten vector signatures, stamp creation, and fillable form completion.' },
    { title: 'OCR Scanning', desc: 'Extract and recognize editable text directly from scanned documents.' },
    { title: 'Images to PDF Conversion', desc: 'Batch convert PNG, JPG, and WEBP image files into clean multi-page PDFs.' },
    { title: 'PDF Page Extraction to Images', desc: 'High-resolution rendering and export of individual PDF pages into image formats.' },
    { title: '100% In-Browser Privacy', desc: 'Documents never touch remote servers; execution runs locally via WebAssembly.' },
    { title: 'No-Watermark Exports', desc: 'Completely free exports with zero forced promotional watermarks or stamps.' }
  ]

  return (
    <section id="founder" className="relative py-24 px-4 sm:px-8 lg:px-14 border-t border-[#222222] bg-[#0E0E0E]">
      <div className="w-full max-w-6xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#222222] pb-6">
          <div className="space-y-2">
            <div className="font-pixel text-[11px] text-[#C5FF00] tracking-widest uppercase">
              // 04. STARTUP & VENTURES
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F1F1]">
              Founder & Product
            </h2>
          </div>
          <div className="font-pixel-ui text-xs text-[#FFC83D]">
            COMPANY: RIGHT 2 CREATION
          </div>
        </div>

        {/* ─── FOUNDER BANNER ─── */}
        <div className="bg-[#141414] border-2 border-[#FFC83D] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#FFC83D] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#212121] px-3 py-1 border border-[#333333]">
                <span className="w-2 h-2 bg-[#FFC83D]" />
                <span className="font-pixel-ui text-xs text-[#FFC83D] font-bold">STARTUP LEADERSHIP</span>
              </div>

              <h3 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#F1F1F1]">
                Founder – Right 2 Creation
              </h3>

              <p className="text-base sm:text-lg text-[#8E8E93] leading-relaxed font-sans max-w-2xl">
                Building useful digital products by turning ideas into practical software solutions.
              </p>

              <div className="pt-2">
                <a
                  href="https://right2creation.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('blip')}
                  className="inline-flex items-center gap-2 text-xs font-pixel text-[#FFC83D] hover:text-[#FFFFFF] transition-colors border-b border-[#FFC83D] pb-1"
                >
                  VISIT RIGHT 2 CREATION (right2creation.in) ↗
                </a>
              </div>
            </div>

            
<div className="lg:col-span-4 flex justify-center lg:justify-end">
  <div className="bg-[#1B1B1B] border border-[#333333] p-4 text-center space-y-2 max-w-[260px] shadow-lg">

    <div className="w-12 h-12 mx-auto rounded-none bg-[#242424] border border-[#FFC83D] flex items-center justify-center">
      <img
        src="/logo.png"
        alt="Right 2 Creation Logo"
        className="w-full h-full object-contain"
      />
    </div>

    <div className="font-pixel text-[10px] text-[#F1F1F1]">
      CREATION IS OUR RIGHTS
    </div>

    <p className="text-[11px] text-[#8E8E93] font-sans">
      Privacy-first web applications built on modern web standards.
    </p>

  </div>
</div>


          </div>
        </div>

        {/* ─── FEATURED PRODUCT: FWD PDF EDITOR ─── */}
        <div className="space-y-8">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242424] pb-4">
            <div>
              <span className="font-pixel text-[11px] text-[#C5FF00] block">// FLAGSHIP PRODUCT</span>
              <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#F1F1F1] pt-1">
                FWD PDF Editor
              </h3>
            </div>

            {/* Direct CTA */}
            <a
              href="https://fwdpdf.right2creation.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('select')}
              className="bg-[#C5FF00] hover:bg-[#b0e600] text-black font-pixel text-xs px-6 py-3.5 tracking-wider transition-all shadow-[4px_4px_0px_0px_#FFFFFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none self-start sm:self-auto"
            >
              EXPLORE FWD PDF EDITOR ↗
            </a>
          </div>

          {/* Product Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#151515] border border-[#2A2A2A] p-6 sm:p-8">

            {/* Product Screenshot / Preview */}
            <div className="lg:col-span-7 space-y-3">
              <div className="border-2 border-[#333333] bg-[#0A0A0A] overflow-hidden group relative shadow-[4px_4px_0px_0px_#262626]">
                <div className="bg-[#1C1C1C] border-b border-[#2B2B2B] px-3 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 bg-[#27C93F]" />
                  </div>
                  <span className="font-pixel-ui text-[10px] text-[#8E8E93]">
                    fwdpdf.right2creation.in
                  </span>
                  <span className="font-pixel text-[9px] text-[#C5FF00]">
                    LIVE APP
                  </span>
                </div>

                <img
                  src="/pdf-editor-mockup.webp"
                  alt="FWD PDF Editor Studio Interface Preview"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  onError={(e) => {
                    // Fallback to demo pic if needed
                    e.currentTarget.src = "/demo pic.png"
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-pixel-ui text-[#8E8E93] pt-1">
                <span>IN-BROWSER VECTOR CANVAS</span>
                <span className="text-[#C5FF00]">100% PRIVATE CLIENT EXECUTION</span>
              </div>
            </div>

            {/* Product Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="font-pixel text-[11px] text-[#FFC83D]">
                  FREE IN-BROWSER PDF STUDIO
                </div>
                <h4 className="font-headline text-2xl font-bold text-[#F1F1F1]">
                  High-Performance PDF Editing Without Boundaries
                </h4>
                <p className="text-sm text-[#8E8E93] leading-relaxed font-sans">
                  FWD PDF Editor is a free, 100% private in-browser document editing studio. Engineered with WebAssembly and hardware-accelerated canvas rendering, documents never leave your computer.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 border-t border-b border-[#262626] py-4">
                <div className="flex items-center gap-2 text-xs font-pixel-ui text-[#F1F1F1]">
                  <span className="text-[#C5FF00] font-bold">✓</span>
                  <span>Zero Server Uploads (Client Memory Heap)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-pixel-ui text-[#F1F1F1]">
                  <span className="text-[#C5FF00] font-bold">✓</span>
                  <span>Zero Watermarks On All Exported Documents</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-pixel-ui text-[#F1F1F1]">
                  <span className="text-[#C5FF00] font-bold">✓</span>
                  <span>100% Free For Students, Educators & Creators</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://fwdpdf.right2creation.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('select')}
                  className="bg-[#C5FF00] hover:bg-[#b0e600] text-black font-pixel text-[11px] px-5 py-3 text-center tracking-wider transition-all"
                >
                  LAUNCH FWD PDF ↗
                </a>
                <a
                  href="https://right2creation.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('blip')}
                  className="border border-[#383838] hover:border-[#FFC83D] text-[#F1F1F1] hover:text-[#FFC83D] font-pixel text-[11px] px-5 py-3 text-center tracking-wider transition-all bg-[#1E1E1E]"
                >
                  VISIT R2C ↗
                </a>
              </div>
            </div>

          </div>

          {/* ─── VERIFIED CAPABILITIES GRID ─── */}
          <div className="space-y-4 pt-4">
            <div className="font-pixel text-[11px] text-[#C5FF00] tracking-widest uppercase">
              // VERIFIED PRODUCT CAPABILITIES
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {verifiedFeatures.map((feat, idx) => (
                <div
                  key={feat.title}
                  onMouseEnter={() => playSound('blip')}
                  className="bg-[#141414] border border-[#242424] hover:border-[#C5FF00]/60 p-4 space-y-2 transition-all hover:bg-[#181818]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-pixel-ui text-xs font-bold text-[#FFC83D]">
                      {feat.title}
                    </span>
                    <span className="font-pixel text-[9px] text-[#666666]">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#8E8E93] leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

