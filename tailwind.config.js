// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderWidth: {
        20: "20px",
        30: "30px",
      },
      transitionDelay: {
        1500: "1500ms",
        2000: "2000ms",
      },
      colors: {
        red_color: "#9E0A0E", // Define your custom color for 'logo'
        red_color_opacity: "#9e0a0f0e",
        red_color_op: "#9e0a0fdf",
      },
      minHeight: {
        "1/3": "50vh",
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};
