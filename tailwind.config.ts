import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      mobile: '415px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1441px',
      screen: '1580px',
    },
    extend: {
      backgroundImage: {
        sfacspace: 'url("/bottom-sfac-logo.svg")',
        mainlineimg1: 'url("/main-linebg.png")',
        mainlineimg2: 'url("/main-linebg2.png")',
        meritimg1: 'url("/selectionrate-bg.png")',
        meritimg2: 'url("/technology-bg.png")',
        meritimg3: 'url("/solution-bg.png")',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      fontFamily: {
        preSemiBold: ['Pretendard-Bold'],
        preMedium: ['Pretendard-Medium'],
        preRegular: ['Pretendard-Regular'],
      },
      fontSize: {
        HB80: [
          '80px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HM80: [
          '80px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HR80: [
          '80px',
          {
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HB60: [
          '60px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HM60: [
          '60px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HR60: [
          '60px',
          {
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HB48: [
          '48px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HM48: [
          '48px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HR48: [
          '48px',
          {
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HB32: [
          '32px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HM32: [
          '32px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HR32: [
          '32px',
          {
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HB28: [
          '28px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HM28: [
          '28px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        HR28: [
          '28px',
          {
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BB24: [
          '24px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BM24: [
          '24px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BR24: [
          '24px',
          {
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BB20: [
          '20px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BM20: [
          '20px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BR20: [
          '20px',
          {
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BB16: [
          '16px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BM16: [
          '16px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BR16: [
          '16px',
          {
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BB14: [
          '14px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BM14: [
          '14px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BR14: [
          '14px',
          {
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BB12: [
          '12px',
          {
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BM12: [
          '12px',
          {
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: '140%',
          },
        ],
        BR12: [
          '12px',
          {
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: '180%',
          },
        ],
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
