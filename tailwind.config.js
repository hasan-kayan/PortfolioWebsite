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
          eczar: ['Eczar', 'serif'],
      },
      extend: {
        cursor: {
            none: 'none',
          },
          colors: {
              appbgcolor: '#6B8A7A',
              apptextcolor: '#1E1E2F',
              
              
          },
      },

      plugins: ['prettier-plugin-tailwindcss', '@headlessui/tailwindcss'],
  },
}
