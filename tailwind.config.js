export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
        type: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          to: { opacity: "0" },
        },
        scan: {
          from: { top: "0" },
          to: { top: "100%" },
        },
      },
      animation: {
        scroll: "scroll 5s 1",
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};
