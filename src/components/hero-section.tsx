"use client"

import { DownloadButton } from "./download-button"

export function HeroSection() {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Edge-to-edge container behind content */}
      <div className="absolute inset-0 mt-2">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 opacity-60">
            {/* Primary floating gradient orb */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Secondary floating gradient orb */}
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/25 via-pink-500/15 to-blue-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Tertiary gradient orb */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Animated moving gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            
            {/* Subtle moving particles effect */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 right-10 w-1 h-1 bg-violet-400/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Flowing gradient waves */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent transform skew-y-12 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-400/5 to-transparent transform -skew-y-6 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          </div>

          {/* Inner container for depth */}
          <div className="absolute inset-4 bg-gradient-to-tr from-slate-800/20 via-blue-900/15 to-indigo-800/25 border border-white/5 rounded-[2rem] backdrop-blur-sm overflow-hidden">
            {/* Additional inner animation layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ultimate Native
            <br />
            <span className="text-blue-400">macOS Assistive Touch</span>
            <br />
            <span className="italic border-b-2 border-blue-400">Context Aware</span>{" "}
            & <span className="italic border-b-2 border-blue-400">Connected</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Seamlessly connect all your favorite tools and apps with intelligent context awareness. 
            The ultimate productivity companion for macOS users.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <DownloadButton
              platform="mac"
              label="Download for macOS"
              primary={true}
            />
            <button className="flex items-center gap-3 px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border border-white/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                {/* Minimal white lightning bolt */}
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78L8 9.5L10.5 3h1l-1 7h3.5c.88 0 .33.75.31.78L13 14.5 11 21z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Instant access to any tool with context awareness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                {/* Apple logo */}
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Native macOS</h3>
              <p className="text-gray-400 text-sm">Built specifically for macOS with native performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                {/* Minimal connection/network icon */}
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Connections</h3>
              <p className="text-gray-400 text-sm">Intelligently connects your favorite productivity tools</p>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              View Documentation
            </button>
            <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              System Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 