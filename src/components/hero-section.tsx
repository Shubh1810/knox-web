"use client"

import { DownloadButton } from "./download-button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative px-4 pt-21 pb-12 sm:pt-28 sm:pb-28 lg:py-32 sm:px-6 lg:px-8 bg-black overflow-hidden mt-20 sm:mt-24 lg:mt-28">
      {/* Edge-to-edge container behind content */}
      <div className="absolute inset-0 lg:inset-x-6 h-[93%] sm:h-full">
        <div className="w-full h-full bg-black rounded-t-[4rem] rounded-b-[2.5rem] overflow-hidden relative">
          {/* Animated gradient outline */}
          <div 
            className="absolute inset-4 rounded-t-[3.5rem] rounded-b-[2rem] overflow-hidden"
            style={{
              background: `linear-gradient(45deg, #1a0a1a, #2d0a1a, #3d0a2a, #1a0a2a, #2a0a1a, #1a0a1a)`,
              backgroundSize: '400% 400%',
              animation: 'gradientShift 4s ease-in-out infinite',
              padding: '2px'
            }}
          >
            {/* Multi-color dot pattern background */}
            <div className="w-full h-full bg-black rounded-t-[3.5rem] rounded-b-[2rem] overflow-hidden relative">
                         {/* White dots base layer */}
             <div 
               className="absolute inset-0"
               style={{
                 backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                 backgroundSize: isMobile ? '12px 12px' : '20px 20px',
                 backgroundPosition: '0 0'
               }}
             ></div>
             
             {/* Yellow dots middle ring */}
             <div 
               className="absolute inset-0"
               style={{
                 backgroundImage: `radial-gradient(circle, rgba(255,255,0,0.25) 1px, transparent 1px)`,
                 backgroundSize: isMobile ? '12px 12px' : '20px 20px',
                 backgroundPosition: '0 0',
                 mask: 'radial-gradient(circle at center, transparent 20%, black 30%, black 60%, transparent 70%)'
               }}
             ></div>
             
             {/* Pink dots inner ring */}
             <div 
               className="absolute inset-0"
               style={{
                 backgroundImage: `radial-gradient(circle, rgba(255,20,147,0.35) 1px, transparent 1px)`,
                 backgroundSize: isMobile ? '12px 12px' : '20px 20px',
                 backgroundPosition: '0 0',
                 mask: 'radial-gradient(circle at center, transparent 10%, black 20%, black 40%, transparent 50%)'
               }}
             ></div>
             
             {/* Dark violet dots center */}
             <div 
               className="absolute inset-0"
               style={{
                 backgroundImage: `radial-gradient(circle, rgba(75,0,130,0.45) 1px, transparent 1px)`,
                 backgroundSize: isMobile ? '12px 12px' : '20px 20px',
                 backgroundPosition: '0 0',
                 mask: 'radial-gradient(circle at center, black 30%, transparent 35%)'
               }}
             ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-none tracking-wide" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Your <span className="italic underline decoration-2 underline-offset-4" style={{ fontFamily: 'serif' }}>Ultimate</span> Desktop
            <br />
 
            <span className="">Assistive</span> touch
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Your Context-aware AI Assistant connected across all your apps, tools and data.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 justify-center items-stretch sm:flex-row sm:gap-2 sm:items-center mb-8 sm:mb-14 mx-4 sm:mx-0 sm:w-auto">
            <div className="w-full sm:w-auto scale-75 sm:scale-75 lg:scale-100">
              <DownloadButton
                platform="mac"
                label="Download for macOS"
                primary={true}
              />
            </div>
            <div className="w-full sm:w-auto scale-75 sm:scale-75 lg:scale-100">
              <DownloadButton
                platform="windows"
                label="Download for Windows"
                variant="black"
              />
            </div>
            <button className="w-auto sm:w-auto flex items-center justify-center gap-1 sm:gap-3 px-1.5 py-3 sm:px-20 sm:py-4 mx-8 font-semibold text-xs sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border border-white/30">
              <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Demo</span>
            </button>
          </div>

          {/* Spacer to maintain hero section height - replaces features section */}
          <div className="mb-8 sm:mb-12 h-48 sm:h-64 md:h-68"></div>
        </div>
      </div>
    </section>
  )
} 