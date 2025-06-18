"use client"

import Image from "next/image"

export function TrustIndicators() {
  const apps = [
    { name: "WhatsApp", imagePath: "/whatsapp.svg", featured: true },
    { name: "Gmail", imagePath: "/gmail.webp", featured: false },
    { name: "Google", imagePath: "/google.webp", featured: true },
    { name: "GitHub", imagePath: "/GitHub_Lockup_Light.svg", featured: true },
    { name: "Microsoft 365", imagePath: "/microsoft365.svg", featured: false },
    { name: "Notion", imagePath: "/notion-logo-white.png", featured: false },
  ]

  return (
    <section className="relative py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Minimal text on left */}
          <div className="md:w-1/3 text-center md:text-left">
            <p className="text-lg text-gray-400 font-[var(--font-geist-mono)] font-normal">
              Seamlessly integrate and control all your tools
            </p>
          </div>

          {/* More prominent divider */}
          <div className="hidden md:block w-0.5 h-20 bg-white/20"></div>

          {/* Logos on right */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-90 transition-opacity duration-300">
              {apps.map((app, index) => (
                <div
                  key={app.name}
                  className={`relative hover:scale-110 transition-transform duration-300 cursor-pointer ${
                    app.featured ? 'w-16 h-16' : 'w-12 h-12'
                  }`}
                >
                  <Image
                    src={app.imagePath}
                    alt={`${app.name} logo`}
                    fill
                    className="object-contain"
                    sizes={app.featured ? "64px" : "48px"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 