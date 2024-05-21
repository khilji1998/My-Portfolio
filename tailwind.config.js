/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'header-height': '3rem', // Add custom height
      },
      fontWeight:{
        'font-medium': '500',
        'font-semi-bold': '600',
      },
      fontSize:{
          'custom': '1.2rem',  // Adding a custom font size
          'big-font-size': '2rem',
          'h1-font-size': '1.5rem',
          'h2-font-size': '1.25rem',
          'h3-font-size': '1.125rem',
          'normal-font-size': '.938rem',
          'small-font-size': '.813rem',
          'smaller-font-size': '.75rem',
      
      },
      spacing: {
        '5': '1.3rem',   // Adding custom spacing value for right
        '2': '.5rem',    // Adding custom spacing value for bottom
      },
      zIndex:{
        'z-tooltip': '10',
        'z-fixed': '100',
        'z-modal': '1000',
      },
      gridTemplateColumns: {
        'max': 'max-content',
      },
      gap:{
         'socail-gap':'1rem'
      }
    },
  },
  plugins: [],
}

