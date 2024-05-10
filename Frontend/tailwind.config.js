/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'Display': ['"Oxygen Mono"', 'serif']
      },
      colors: {
        "mehroon": "#993300",
        "orange": "#B26F4D",
        "lorange": "#D6C9C2",
        "lgreen": "#E6E8E3",
        "green": "#C9D6C2",
        "dgreen": "#779966",
        "lpink": "#D6C9C2",
        "pink": "#CAAC9C",
        "offwhite": "#F5F6F3",
        "grey": "#D9D9D9"
      },
      fontSize: {
        'hero': '68px',
        'heading': '48px',
        'subheading': '36px',
        "cardtitle": "40px",
        'text': '24px',
        'btn': '20px',
        "bolg_btn": "24px"
      }
    },
  },
  plugins: [],
}

