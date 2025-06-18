"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-50 w-full px-4 py-4 sm:px-6 lg:px-8 bg-black">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-1">
            <div className="w-10 h-10 relative">
              <Image
                src="/knox.PNG"
                alt="Knox Logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-white font-normal text-xl font-[var(--font-bebas-neue)] tracking-wide">KNOX</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-blue-200 transition-colors">
            HOME
          </Link>
          <Link href="/features" className="text-white hover:text-blue-200 transition-colors">
            FEATURES
          </Link>
          <Link href="/downloads" className="text-white hover:text-blue-200 transition-colors">
            DOWNLOADS
          </Link>
          <Link href="/docs" className="text-white hover:text-blue-200 transition-colors">
            DOCS
          </Link>
          <Link href="/support" className="text-white hover:text-blue-200 transition-colors">
            SUPPORT
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center">
          <div className="relative">
            <input
              type="search"
              placeholder="SEARCH"
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-64"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-4 h-4 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
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
              HOME
            </Link>
            <Link
              href="/features"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FEATURES
            </Link>
            <Link
              href="/downloads"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              DOWNLOADS
            </Link>
            <Link
              href="/docs"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              DOCS
            </Link>
            <Link
              href="/support"
              className="block text-white hover:text-blue-200 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SUPPORT
            </Link>
            <div className="pt-4">
              <input
                type="search"
                placeholder="SEARCH"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 