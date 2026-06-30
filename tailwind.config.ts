import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontSize: {
  			'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.25vw, 1rem)', { lineHeight: '1.5' }],
  			'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.6' }],
  			'fluid-lg': ['clamp(1.125rem, 1rem + 0.75vw, 1.5rem)', { lineHeight: '1.5' }],
  			'fluid-xl': ['clamp(1.5rem, 1.2rem + 1.5vw, 2rem)', { lineHeight: '1.3' }],
  			'fluid-title': ['clamp(2rem, 1.5rem + 2.5vw, 3.5rem)', { lineHeight: '1.2' }],
  			'fluid-heading': ['clamp(1.375rem, 1.1rem + 1vw, 2rem)', { lineHeight: '1.3' }],
  			'fluid-2xl': ['clamp(2rem, 1.5rem + 2.5vw, 3rem)', { lineHeight: '1.2' }],
  			'fluid-hero': ['clamp(2.5rem, 2rem + 4vw, 4rem)', { lineHeight: '1.1' }],
  			'fluid-display': ['clamp(1.75rem, 1.25rem + 2.5vw, 2.4rem)', { lineHeight: '1.05' }],
  		},
  		spacing: {
  			'section-y': 'clamp(3rem, 6vw, 6rem)',
  			'section-x': 'clamp(1rem, 4vw, 2.5rem)',
  			'input-y': 'clamp(0.5rem, 1vw, 0.625rem)',
  			'input-x': 'clamp(0.75rem, 2vw, 1rem)',
  			'sidebar': 'clamp(12rem, 18vw, 16rem)',
  		},
  		minHeight: {
  			'textarea': 'clamp(8rem, 25vh, 12rem)',
  		},
  		maxWidth: {
  			'content': 'min(100%, 64rem)',
  			'prose': 'min(100%, 48rem)',
  			'video': 'min(100%, clamp(22rem, 72vw, 64rem))',
  		},
  		width: {
  			'sidebar': 'clamp(12rem, 18vw, 16rem)',
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dotted-grid': 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 2px, transparent 0)',
  		},
      backgroundSize: {
        'dotted-grid': '32px 32px',
      },
  		keyframes: {
  			appear: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '100%'
  				}
  			}
  		},
  		animation: {
  			appear: 'appear 300ms ease-out forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			'deep-blue': {
  				DEFAULT: '#0a1628',
  				light: '#0f2040',
  				dark: '#060e1a',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
