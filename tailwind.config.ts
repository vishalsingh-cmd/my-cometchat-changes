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
      xxs: ['0.625rem', {}],
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
      'lg-richtext': ['1.125rem'],
      xl: [
        'clamp(1.125rem, 0.377vw + 1.035rem, 1.375rem)',
        {
          fontWeight: 'var(--font-weight-semibold)'
        }
      ],
      '2xl': [
        'clamp(1.375rem, 1.155vw + 1.076rem, 2rem)',
        {
          fontWeight: 'var(--font-weight-semibold)'
        }
      ],
      '3xl': [
        'clamp(2rem, 1.509vw + 1.642rem, 3rem)',
        {
          fontWeight: 'var(--font-weight-semibold)'
        }
      ],
      '4xl': [
        'clamp(2.5rem, 1.509vw + 2.142rem, 3.5rem)',
        {
          fontWeight: 'var(--font-weight-semibold)'
        }
      ],
      h1: ['48px', { lineheight: '1.06' }],
      h2: ['32px', { lineheight: '1.15' }],
      h3: ['24px', { lineheight: '1.15' }],
      h4: ['20px', { lineheight: '1.15' }]
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
          'linear-gradient(0deg, transparent 0%, hsl(var(--color-gray-12) / 0.1) 50%, transparent 100%)',
        'gradient-purple': 'linear-gradient(180deg, #FFFFFF 0%, #6A55D7 126.95%)',
        'border-beam-white':
          'linear-gradient(90deg, rgba(250, 250, 255, 0) 0%, rgba(250, 250, 255, 0.1) 5%, rgba(250, 250, 255, 0.1) 95%, rgba(250, 250, 255, 0) 100%)'
      },
      boxShadow: (theme) => ({
        focus: `0 0 16px 2px ${theme('colors.brand.7/80')}`,
        // box-shadow: 0px 4px 20px 0px #14131D0F;
        'inner-soft': 'inset 0px 4px 20px 0px hsl(var(--color-gray-12) / 0.06)'
      }),
      borderRadius: {
        '1/2': '50%'
      },
      transitionTimingFunction: {
        motion: 'cubic-bezier(0.2, 1, 0.2, 1)',
        smooth: 'cubic-bezier(1, 0, 0, 1)'
      },
      opacity: {
        2: '0.02',
        8: '0.08',
        15: '0.15',
        54: '0.54',
        64: '0.64',
        74: '0.74',
        98: '0.98'
      },
      padding: {
        container: 'clamp(1rem, 5vw, 4rem)'
      },
      maxWidth: {
        content: '1440px'
      },
      animation: {
        'slide-back-and-foward-smothly':
          'slideBackAndFoward 4s ease-in-out 0s infinite alternate both running',
        'grow-comet-smothly': 'growCometSmothly 0.2s linear',
        fadeIn: 'fadeIn 0.5s ease-in-out'
      },
      keyframes: {
        slideBackAndFoward: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '12%'
          },
          '25%': {
            opacity: '20%'
          },
          '50%': {
            opacity: '12%'
          },
          '75%': {
            opacity: '18%'
          },
          '100%': {
            transform: 'translateX(34%)',
            opacity: '22%'
          }
        },
        growCometSmothly: {
          from: {
            width: '24px',
            height: '24px'
          },
          to: {
            width: '40px',
            height: '40px'
          }
        },
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        }
      },
      spacing: {
        'top-nav': '64px'
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
        },
        '.visually-hidden': {
          border: '0',
          clip: 'rect(0 0 0 0)',
          height: 'auto',
          margin: '0',
          overflow: 'hidden',
          padding: '0',
          position: 'absolute',
          width: '1px',
          'white-space': 'nowrap'
        },
        '.multiline-ellipsis': {
          position: 'relative',
          maxHeight: '1.4em',
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical'
        }
      });
    })
  ]
};
