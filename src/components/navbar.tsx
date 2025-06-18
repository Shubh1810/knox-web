"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { DownloadButton } from "./download-button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-2 left-4 right-4 z-50 w-auto sm:px-3 sm:py-0.5 lg:px-4 bg-black/80 backdrop-blur-md rounded-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center -space-x-2.5">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 relative">
              <Image
                src="/knox.PNG"
                alt="Knox Logo"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
            <span className="text-white font-normal text-2xl sm:text-3xl md:text-4xl tracking-wide -ml-2 mt-1" style={{ fontFamily: 'var(--font-bebas-neue)' }}>KNOX</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-white hover:text-blue-200 transition-colors">
            Features
          </Link>
          <Link href="/downloads" className="text-white hover:text-blue-200 transition-colors">
            Downloads
          </Link>
          <Link href="/docs" className="text-white hover:text-blue-200 transition-colors">
            Docs
          </Link>
          <Link href="/support" className="text-white hover:text-blue-200 transition-colors">
            Support
          </Link>
        </div>

        {/* Sign In and Download Buttons */}
        <div className="hidden lg:flex items-center">
          <button className="px-9 py-2.5 text-white font-normal hover:text-blue-200 transition-colors font-[var(--font-inter)] border border-gray-300/30 rounded-md hover:border-gray-200/50">
            Sign In
          </button>
          <div className="scale-75">
            <DownloadButton
              platform="mac"
              label="Download"
              primary={true}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 mt-2">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/downloads"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Downloads
            </Link>
            <Link
              href="/docs"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/support"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="pt-4 space-y-3">
              <button className="block w-full text-left text-white hover:text-blue-200 transition-colors py-4 font-[var(--font-inter)] border border-gray-300/30 rounded-md hover:border-gray-200/50 px-8">
                Sign In
              </button>
              <div className="scale-90">
                <DownloadButton
                  platform="mac"
                  label="Download"
                  primary={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 