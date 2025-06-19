"use client"

export function FeaturesSection() {
  return (
    <section className="relative px-4 py-20 sm:py-24 lg:py-28 sm:px-6 lg:px-8 bg-black">
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Powerful Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of macOS productivity with intelligent automation and seamless integrations.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
                {/* Context aware microphone icon */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">Context Aware</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm mx-auto">
                Understands what you&apos;re working on and suggests relevant tools and actions based on your current context.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
                {/* Apple logo */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">Native macOS</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm mx-auto">
                Built specifically for macOS with native performance, system integration, and Apple&apos;s design principles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
                {/* Connection/network icon */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">Smart Connections</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm mx-auto">
                Intelligently connects your favorite productivity tools and creates seamless workflows between apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 