// tailwind.config.js

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',   // Scan all JS, TS, JSX, and TSX files in the pages folder
    './src/components/**/*.{js,ts,jsx,tsx}', // Scan all JS, TS, JSX, and TSX files in the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
