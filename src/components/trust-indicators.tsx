"use client"

import Image from "next/image"

export function TrustIndicators() {
  const apps = [
    { name: "WhatsApp", imagePath: "/whatsapp.svg", featured: true },
    { name: "Gmail", imagePath: "/gmail.webp", featured: false },
    { name: "Google", imagePath: "/google.webp", featured: true },
    { name: "GitHub", imagePath: "/GitHub_Lockup_Light.svg", featured: true },
    { name: "Microsoft 365", imagePath: "/microsoft365.svg", featured: false },
    { name: "Apple", imagePath: null, featured: false },
  ]

  return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Minimal text on left */}
          <div className="md:w-1/3 text-center md:text-left">
            <p className="text-xs text-gray-400 font-[var(--font-geist-mono)] font-normal">
              Seamlessly integrate and control all your tools
            </p>
          </div>

          {/* More prominent divider */}
          <div className="hidden md:block w-0.5 h-20 bg-white/20"></div>

          {/* Logos on right */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-90 transition-opacity duration-300">
              {apps.map((app) => (
                <div
                  key={app.name}
                  className={`relative hover:scale-110 transition-transform duration-300 cursor-pointer ${
                    app.featured ? 'w-16 h-16' : 'w-12 h-12'
                  } flex items-center justify-center`}
                >
                  {app.name === "Apple" ? (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  ) : app.imagePath ? (
                    <Image
                      src={app.imagePath}
                      alt={`${app.name} logo`}
                      fill
                      className="object-contain"
                      sizes={app.featured ? "64px" : "48px"}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 