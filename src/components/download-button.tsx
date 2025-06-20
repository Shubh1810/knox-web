"use client"

interface DownloadButtonProps {
  platform: "mac" | "windows"
  label: string
  primary?: boolean
  variant?: "default" | "black"
}

export function DownloadButton({ platform, label, primary = false, variant = "default" }: DownloadButtonProps) {
  const getPlatformIcon = () => {
    if (platform === "mac") {
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      )
    }
    
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z"/>
      </svg>
    )
  }

  const baseClasses = "w-full flex items-center justify-center gap-2 px-8 py-4 font-normal text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-[var(--font-inter)]"
  
  const primaryClasses = "bg-white hover:bg-gray-100 text-black shadow-lg"
  const secondaryClasses = "bg-white/10 hover:bg-white/20 text-white border border-white/30"
  const blackClasses = "bg-black hover:bg-gray-800 text-white border border-white/20 shadow-lg"

  const getButtonClasses = () => {
    if (variant === "black") return `${baseClasses} ${blackClasses}`
    return `${baseClasses} ${primary ? primaryClasses : secondaryClasses}`
  }

  const buttonClasses = getButtonClasses()

  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading for ${platform}`)
    
    // Example download logic (replace with actual download URLs)
    const downloadUrls = {
      mac: "/downloads/knox-mac.dmg",
      windows: "/downloads/knox-windows.exe"
    }
    
    // Create temporary link for download
    const link = document.createElement('a')
    link.href = downloadUrls[platform]
    link.download = `knox-${platform}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button 
      className={buttonClasses}
      onClick={handleDownload}
      aria-label={`Download Knox for ${platform}`}
    >
      {getPlatformIcon()}
      <span>{label}</span>
    </button>
  )
} 