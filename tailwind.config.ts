import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        // latte: {
        //   primary: "#8839ef",
        //   secondary: "#ea76cb",
        //   accent: "#179299",
        //   neutral: "#bcc0cc",
        //   "base-100": "#ccd0da",
        //   info: "#209fb5",
        //   success: "#40a02b",
        //   warning: "#df8e1d",
        //   error: "#d20f39",
        // },
        // mocha: {
        //   primary: "#cba6f7",
        //   secondary: "#f5c2e7",
        //   accent: "#94e2d5",
        //   neutral: "#181825",
        //   "base-100": "#1e1e2e",
        //   info: "#89b4fa",
        //   success: "#a6e3a1",
        //   warning: "#f9e2af",
        //   error: "#f38ba8",
        // },
      },      
      "synthwave",
      "cyberpunk",
    ],
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
    require("daisyui"),
  ],
};
export default config;
