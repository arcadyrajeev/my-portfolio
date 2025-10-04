// tailwind.config.js
import plugin from "tailwindcss/plugin";

export default {
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("portrait", "@media (orientation: portrait)");
      addVariant("landscape", "@media (orientation: landscape)");
    }),
  ],
};
