module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      body: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#1C1D24',
        tertiary: '#FFFFFF',
        light: '#050402',
        black: '#2D3748',
        white: '#FFFFFF',
        accent: {
          DEFAULT: '#667EEA',
          hover: '#667EEA',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
