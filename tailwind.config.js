/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Twitter blue as primary
        primary: '#00BA7C',
        primaryDark: '#1A91DA',
        
        // Twitter specific colors
        'twitter-blue': '#1DA1F2',
        'twitter-dark': '#15202B',
        'twitter-darker': '#192734',
        'twitter-light': '#F7F9F9',
        'twitter-border': '#EFF3F4',
        'twitter-border-dark': '#38444D',
        
        // Semantic colors
        'twitter-red': '#F4212E',
        'twitter-green': '#00BA7C',
        'twitter-pink': '#F91880',
      },
    },
  },
  plugins: [],
};
