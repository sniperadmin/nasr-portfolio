import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        canvas: '#0a0d12',
        surface: {
          1: '#111620',
          2: '#161f2e',
        },
        border: {
          subtle: '#1f2937',
          active: '#2a3441',
        },
        phosphor: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          indigo: '#6366f1',
        },
        content: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          inert: '#475569',
        }
      },
      boxShadow: {
        'phosphor-emerald': '0 0 12px -2px rgba(16, 185, 129, 0.2)',
        'phosphor-cyan': '0 0 12px -2px rgba(6, 182, 212, 0.2)',
        'modal': '0 0 0 1px #2a3441, 0 12px 24px -6px rgba(0, 0, 0, 0.75)',
        'volumetric': '0 24px 48px -12px rgba(0, 0, 0, 0.5), 0 0 24px rgba(16, 185, 129, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        'gutter': '1.5rem',
        'gutter-sm': '1rem',
        'gutter-lg': '2rem',
      },
      borderRadius: {
        DEFAULT: '4px',
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
        'xl': '12px',
      }
    }
  }
}
