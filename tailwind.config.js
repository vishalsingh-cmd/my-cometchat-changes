import defaultTheme from 'tailwindcss/defaultTheme';

const createThemeScale = (scale: string, size = 12) => {
  const themeScale: Record<number, string> = {};

  for (let i = 1; i <= size; i++) {
    themeScale[i] = `hsl(var(--color-${scale}-${i}) / <alpha-value>)`;
  }

  return themeScale;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      brand: createThemeScale('brand'),
      gray: createThemeScale('gray'),
      orange: createThemeScale('orange'),
      blue: createThemeScale('blue'),
      purple: createThemeScale('purple'),
      red: createThemeScale('red'),
      green: createThemeScale('green')
    },
    fontFamily: {
      sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
    },
    fontWeight: {
      normal: 'var(--font-weight-normal)',
      medium: 'var(--font-weight-medium)',
      semibold: 'var(--font-weight-semibold)'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: 'clamp(1rem, 0.189vw + 0.955rem, 1.125rem)',
      xl: 'clamp(1.125rem, 0.377vw + 1.035rem, 1.375rem)',
      '2xl': 'clamp(2rem, 1.509vw + 1.642rem, 3rem)',
      '3xl': 'clamp(2.5rem, 1.509vw + 2.142rem, 3.5rem)'
    },
    lineHeight: {
      none: '1',
      tighter: '1.06',
      tight: '1.12',
      snug: '1.2',
      normal: '1.4'
    },
    letterSpacing: {
      none: '0',
      wide: '0.005em',
      widest: '0.02em'
    },
    extend: {
      boxShadow: (theme) => ({
        focus: `0 0 16px 2px ${theme('colors.brand.7/80')}`
      })
    }
  }
};
