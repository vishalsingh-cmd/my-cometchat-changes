import plugin from 'tailwindcss/plugin';
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
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    container: {
      screens: {
        DEFAULT: '1440px'
      }
    },
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
    fontSize: ({ theme }) => ({
      xs: ['0.75rem', {}],
      sm: [
        '0.875rem',
        {
          letterSpacing: theme('letterSpacing.wide')
        }
      ],
      md: [
        '1rem',
        {
          letterSpacing: theme('letterSpacing.wide')
        }
      ],
      lg: [
        'clamp(1rem, 0.189vw + 0.955rem, 1.125rem)',
        {
          fontWeight: 'var(--font-weight-semibold)',
          letterSpacing: theme('letterSpacing.wide')
        }
      ],
      xl: [
        'clamp(1.125rem, 0.377vw + 1.035rem, 1.375rem)',
        {
          fontWeight: 'var(--font-weight-semibold)'
        }
      ],
      '2xl': [
        'clamp(2rem, 1.509vw + 1.642rem, 3rem)',
        {
          fontWeight: 'var(--font-weight-semibold)'
        }
      ],
      '3xl': [
        'clamp(2.5rem, 1.509vw + 2.142rem, 3.5rem)',
        {
          fontWeight: 'var(--font-weight-semibold)'
        }
      ]
    }),
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
      backgroundImage: {
        'divider-gradient':
          'linear-gradient(90deg, transparent 0%, hsl(var(--color-gray-12) / 0.1) 50%, transparent 100%)',
        'divider-gradient-vertical':
          'linear-gradient(0deg, transparent 0%, hsl(var(--color-gray-12) / 0.1) 50%, transparent 100%)'
      },
      boxShadow: (theme) => ({
        focus: `0 0 16px 2px ${theme('colors.brand.7/80')}`
      }),
      transitionTimingFunction: {
        motion: 'cubic-bezier(0.2, 1, 0.2, 1)',
        smooth: 'cubic-bezier(1, 0, 0, 1)'
      },
      opacity: {
        8: '0.08',
        15: '0.15',
        54: '0.54',
        64: '0.64',
        74: '0.74',
        98: '0.98'
      },
      padding: {
        container: 'clamp(1rem, 5vw, 3rem)'
      },
      maxWidth: {
        content: '1440px'
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', "[data-theme='light'] &");
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.elevated-links': {
          position: 'relative',

          'a[href]': {
            position: 'static',
            zIndex: 1
          },
          'a.elevated-link:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }
        }
      });
    })
  ]
};
