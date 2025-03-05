/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      screens: {
          sm: '640px',
          // => @media (min-width: 640px) { ... }

          md: '768px',
          // => @media (min-width: 768px) { ... }

          lg: '1024px',
          // => @media (min-width: 1024px) { ... }

          xl: '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
      },
      extend: {
          colors: {
              appbgcolor: '#3d348b',
              appbgcolorstart: '#1DBDE6',
              appbgcolorend: '#F1515E',
              navbarbgcolor:'#5e548e',
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
      },

      plugins: ['prettier-plugin-tailwindcss', '@headlessui/tailwindcss'],
  },
}
