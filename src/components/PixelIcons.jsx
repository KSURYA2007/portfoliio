import React from 'react'

// Retro Pixel Icons matching the 8-bit reference aesthetic

export function PacmanIcon({ className = "w-5 h-5 text-[#FFC83D]" }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
      <path d="M5 2h6v1H5V2zm-2 2h2v1H3V4zm0 2h1v4H3V6zm1 4h1v1H4v-1zm1 1h6v1H5v-1zm6-1h1v1h-1v-1zm1-1h1v1h-1v-1zm1-2h1v2h-1V9zm-2-2h1v2h-1V7zm-1-1h1v1h-1V6zm-1-1h1v1h-1V5zm-1-1h1v1H8V4zm3-2h2v2h-2V2z" />
    </svg>
  )
}

export function PixelStar({ className = "w-3 h-3 text-[#FFC83D]" }) {
  return (
    <svg viewBox="0 0 7 7" fill="currentColor" className={className} shapeRendering="crispEdges">
      <path d="M3 0h1v1H3V0zm0 6h1v1H3V6zM0 3h1v1H0V3zm6 0h1v1H6V3zM2 2h3v3H2V2z" />
    </svg>
  )
}

export function PixelDiamond({ className = "w-3 h-3 text-[#FFC83D]" }) {
  return (
    <svg viewBox="0 0 9 9" fill="currentColor" className={className} shapeRendering="crispEdges">
      <path d="M4 0h1v1H4V0zm-1 1h3v1H3V1zm-1 1h5v1H2V2zm-1 1h7v1H1V3zm-1 1h9v1H0V4zm1 1h7v1H1V5zm1 1h5v1H2V6zm1 1h3v1H3V7zm1 1h1v1H4V8z" />
    </svg>
  )
}

export function SoundIcon({ muted = true, className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
      {/* Pixel Speaker */}
      <path d="M2 5h3v6H2V5zm3-1h2v8H5V4zm2-2h2v12H7V2zm2 0h1v12H9V2z" />
      {!muted ? (
        /* Sound waves */
        <path d="M12 4h1v1h-1V4zm1 1h1v2h-1V5zm1 2h1v2h-1V7zm-1 2h1v2h-1V9zm-1 2h1v1h-1v-1z" />
      ) : (
        /* X mute mark */
        <path d="M12 5h1v1h-1V5zm2 0h1v1h-1V5zm-1 1h1v1h-1V6zm-1 1h1v1h-1V7zm1 1h1v1h-1V8zm1 1h1v1h-1V9zm-2 0h1v1h-1V9z" />
      )}
    </svg>
  )
}

export function DeviceIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
      {/* Pixel Phone / Handheld */}
      <path d="M4 1h8v14H4V1zm1 1v12h6V2H5zm2 10h2v1H7v-1zm1-9h1v1H8V3z" />
    </svg>
  )
}

export function GamepadIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
      {/* Retro Controller */}
      <path d="M2 5h12v7H2V5zm1 1v5h10V6H3zm2 2h1v1H5V8zm1-1h1v3H6V7zm1 1h1v1H7V8zm4-1h1v1h-1V7zm2 1h1v1h-1V8z" />
    </svg>
  )
}

export function FolderIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
      {/* Pixel Folder */}
      <path d="M2 3h5v2h7v9H2V3zm1 3v7h10V6H8V5H3v1z" />
    </svg>
  )
}

export function PixelPointer({ active = true, className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 10 10" fill={active ? "#C5FF00" : "currentColor"} className={className} shapeRendering="crispEdges">
      <path d="M1 1h2v8H1V1zm2 1h2v6H3V2zm2 1h2v4H5V3zm2 1h2v2H7V4z" />
    </svg>
  )
}

export function SpeechBubblePointer() {
  return (
    <div className="absolute -bottom-3 right-8 w-4 h-3 overflow-hidden pointer-events-none">
      <svg viewBox="0 0 16 12" className="w-4 h-3 fill-white" shapeRendering="crispEdges">
        <path d="M0 0h16v2H14v2h-2v2h-2v2H8v2H6v2H4V0z" />
        <path d="M2 0h12v1H12v2h-2v2H8v2H6v2H4V0z" fill="#000000" />
      </svg>
    </div>
  )
}

export function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 0 0-1.62 1.62c0 .9.72 1.63 1.62 1.63.9 0 1.62-.73 1.62-1.63 0-.9-.72-1.62-1.62-1.62Z" />
    </svg>
  )
}

