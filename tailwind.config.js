/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appbgcolor: '#131416',
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
        buttoncolorhoveralt: '#338ef7',
        buttongreenglowcolor: 'rgba(0, 209, 31, 0.4)',
        alertColor: '#FF3F3F',
        alertColorHover: '#FF4848',
        alertColorGlow: 'rgba(255, 63, 63, 0.4)',
        co2divbg: 'rgba(255, 63, 63, 0.5)',
      },
    },
  },
  plugins: [],
}