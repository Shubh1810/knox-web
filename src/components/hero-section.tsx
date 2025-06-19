"use client"

import { DownloadButton } from "./download-button"
import { useEffect, useRef } from "react"

interface VantaOptions {
  el: HTMLElement | null;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  color1: number;
  color2: number;
  size: number;
}

interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA: {
      CELLS: (options: VantaOptions) => VantaEffect;
    };
    THREE: unknown;
  }
}

export function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaInstance = useRef<VantaEffect | null>(null)

  useEffect(() => {
    const loadVanta = async () => {
      if (!vantaRef.current) return

      // Load Three.js
      if (!window.THREE) {
        const threeScript = document.createElement('script')
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        document.head.appendChild(threeScript)
        await new Promise(resolve => threeScript.onload = resolve)
      }

      // Load Vanta Cells
      if (!window.VANTA) {
        const vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js'
        document.head.appendChild(vantaScript)
        await new Promise(resolve => vantaScript.onload = resolve)
      }

      // Initialize Vanta effect on the inner overlay
      if (window.VANTA && vantaRef.current) {
        vantaInstance.current = window.VANTA.CELLS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x130043,
          color2: 0xd70750,
          size: 1.80
        })
      }
    }

    loadVanta()

    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy()
      }
    }
  }, [])

  return (
    <section className="relative px-4 pt-21 pb-12 sm:pt-28 sm:pb-28 lg:py-32 sm:px-6 lg:px-8 bg-black overflow-hidden mt-20 sm:mt-24 lg:mt-28">
      {/* Edge-to-edge container behind content */}
      <div className="absolute inset-0 lg:inset-x-6 h-[93%] sm:h-full">
        <div className="w-full h-full bg-black rounded-t-[4rem] rounded-b-[2.5rem] overflow-hidden relative">
          {/* Vanta background overlay - replaces blurred overlay */}
          <div 
            ref={vantaRef}
            className="absolute inset-4 border border-white/5 rounded-t-[3.5rem] rounded-b-[2rem] overflow-hidden"
          >
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-[2.75rem] sm:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-8 leading-none" style={{ fontFamily: 'var(--font-metal-mania)' }}>
            Your Ultimate MacOS
            <br />
 
            <span className="">Assistive touch </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            Your Context-aware AI Assistant connected across all your apps, tools and data.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-0 justify-center items-stretch sm:flex-row sm:gap-2 sm:items-center mb-8 sm:mb-14 mx-4 sm:mx-0 sm:w-auto">
            <div className="w-full sm:w-auto scale-75 sm:scale-75 lg:scale-100">
              <DownloadButton
                platform="mac"
                label="Download for macOS"
                primary={true}
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