// Platform types
export type Platform = "mac" | "windows" | "linux"

// Download related types
export interface DownloadInfo {
  platform: Platform
  version: string
  size: number
  url: string
  checksum: string
  releaseDate: string
}

// Component prop types
export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// Trust indicator types
export interface TrustIndicator {
  name: string
  icon: string | React.ReactNode
  description?: string
  verified?: boolean
}

// Feature types
export interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  highlighted?: boolean
}

// User types (for future authentication)
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  plan: "free" | "pro" | "enterprise"
  createdAt: string
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Theme types
export interface ThemeConfig {
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
}

// Form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Analytics event types
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: Record<string, unknown>
}

// Component state types
export interface ComponentState<T = unknown> {
  loading: boolean
  error: AppError | null
  data: T
} 