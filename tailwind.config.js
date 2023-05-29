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
      brand: createThemeScale('brand'),
      gray: createThemeScale('gray'),
      orange: createThemeScale('orange'),
      blue: createThemeScale('blue'),
      purple: createThemeScale('purple'),
      red: createThemeScale('red'),
      green: createThemeScale('green')
    }
  },
  plugins: []
};
