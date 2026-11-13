import React from 'react'

export function ViewportBorder() {
  return (
    <div
      className="fixed inset-2 sm:inset-3 pointer-events-none z-30 border border-[#222222]/90 rounded-none"
      aria-hidden="true"
    >
      {/* Subtle corner pixel brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#3A3A3A]" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#3A3A3A]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#3A3A3A]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#3A3A3A]" />
    </div>
  )
}

