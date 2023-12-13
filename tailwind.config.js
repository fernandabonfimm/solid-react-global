// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#546E7A',
        tiffany: '#00A19D',
        navy: '#18262E',
        white: '#EFFFFF',
        darkBackground: '#324858',
        lightBackground: '#C8FBEA',
        lightText: '#FCE8DC',
        yellow: '#FFFCD1',
        orange: '#EA5006',
        green: '#197356',
        border: '#18262E',
        black: '#000000',
        cinabre: '#EA5006',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        less: "0.5rem",
        sm: "0.839rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
