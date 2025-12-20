export default {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#160C28",
          subtle: "#331C5F",
          light: "#6035B1",
        },
        onPrimary: {
          DEFAULT: "white",
          subtle: "#B5A6B0",
          light: "#AAB0CF",
        },
        secondary: {
          DEFAULT: "#F1E9EE",
          subtle: "#DFCED9",
          light: "#CBAFC2",
        },
        medium: "#9A9AB7",
        accent: "#EFCB68",
        subtle: "#B98EA7",
        scrollbar: "#222525",
        text: {
          DEFAULT: "#000411",
          subtle: "#000929",
          highlight: "#0032E6",
        },
      },
      fontFamily: {
        system: ["system-ui"],
      },
    },
  },
  plugins: [],
};
