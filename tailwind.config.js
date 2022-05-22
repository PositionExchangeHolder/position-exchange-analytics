module.exports = {
  // officialSorting: true,
  content: [
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        Rampart: ['Inter', 'sans - serif', 'Rampart One', 'cursive'],
      },
      colors: {
        //border
        waterloo: 'rgba(120,122,145,0.5)',
        //
        // text
        'txt-catskill-white': '#E2E8F0',
        'txt-white': 'white',
        'txt-sub-text-color': '#c3c3cc',
        'txt-primary': '#DDDDDD',
        'txt-light-txt-primary': '#111119',
        'txt-secondary': '#87859F',
        'txt-light-secondary': '#93938A',

        // text
        // background
        primary: '#0e1118',
        'light-primary': 'white',
        'light-primary-hv': '#F1F1F1',

        secondary: 'rgb(20, 20 ,35)',
        'light-secondary': 'rgb(226, 232 ,240)',
        mineShaft: '#2D2D3D',
        'light-mineShaft': '#2D2D3D',
        'mineShaft-30': 'rgba(45, 45, 61, 0.3)',
        'light-mineShaft-30': 'rgba(45, 45, 61, 0.3)',
        mirage: '#1d2732',
        'light-mirage': '#1d2732',
        'gun-powder': '#3A3953',
        'light-gun-powder': '#3A3953',
        mira: 'rgb(20, 28, 37)',
        'light-mira': 'rgb(20, 28, 37)',
        mirage1: 'rgb(29, 39, 50)',
        'light-mirage1': 'rgb(29, 39, 50)',
        secondary1: 'rgb(35, 35 ,45)',
        'light-secondary1': 'rgb(35, 35 ,45)',
        primary1: 'rgb(30, 25 ,40)',
        'light-primary1': 'rgb(30, 25 ,40)',

        // background
      },
      maxHeight: {
        180: '11.25rem',
        120: '7.5rem',
      },
      height: {
        180: '11.25rem',
        150: '9.4rem',
        120: '7.5rem',
        400: '25rem',
        300: '25rem',
      },
      width: {
        180: '11.25rem',
        150: '9.4rem',
        120: '7.5rem',
        400: '25rem',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      'tiny-xs': '0.7rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}
