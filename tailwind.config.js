/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      extend: {
        colors: {
          appbgcolor: '#160F29',
          navbarbgcolor: '#246A73',
          navbarhovercolor: '#8DA3A2',
          navbartextcolor: '#ffffff',
          divbgcolor: '#191A1D',
          divbgcoloropacity: 'rgba(24, 24, 27, 0.5)',
          divbgcoloralt: '#202124',
          strokecolor: '#3F3F46',
          strokecoloralt: '#52525B',
          h1textcolor: '#FFFFFF',
          defaulttextcolor: '#FFFFFF',
          inputtextcolor: '#A1A1AA',
          inputcolor: '#202124',
          inputhovercolor: '#343438',
          loginbuttoncolor: '#00D11F',
          loginbuttonhover: '#37E601',
          buttoncolor: '#006FEE',
          buttoncolorhover: '#005bc4',
          buttoncolorhoveralt: '#004ea9',
          buttongreenglowcolor: 'rgba(0, 209, 31, 0.4)',
          alertColor: '#FF3F3F',
          alertColorAlt: '#D32929',
          alertColorGlow: 'rgba(255, 63, 63, 0.4)',
          co2divbg: 'rgba(255, 63, 63, 0.5)',
        },
        keyframes: {
          move1: {
            '0%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(50px, -50px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
          move2: {
            '0%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-50px, 50px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
          move3: {
            '0%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(30px, -30px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
        },
        animation: {
          move1: 'move1 8s ease-in-out infinite',
          move2: 'move2 10s ease-in-out infinite',
          move3: 'move3 12s ease-in-out infinite',
        },
      },
    },
    plugins: [require('@headlessui/tailwindcss')],
  };
  