import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import unocssThemes from "unocss-themes";
import presetIcons from "@unocss/preset-icons";

const themes = {
  red: ".red",
  orange: ".orange",
  yellow: ".yellow",
  green: ".green",
  blue: ".blue",
  indigo: ".indigo",
  purple: ".purple",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      theme: {
        fontFamily: {
          sans: '"Barlow", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
      },
      presets: [presetAttributify(), presetUno(), presetIcons()],
      variants: unocssThemes({ themes }),
      rules: [
        [
          "bg-clip-text",
          {
            "background-clip": "text",
            "-webkit-background-clip": "text",
          },
        ],
        [
          /^(from|to)-(.*?)-(\d+)$/,
          (match, { theme }) => {
            const [, dir, color, size] = match;
            if (!theme?.colors?.[color]?.[size]) {
              return;
            }
            return {
              [`--un-gradient-${dir}`]: theme.colors[color][size],
              "--un-gradient-stops":
                "var(--un-gradient-from, transparent), var(--un-gradient-to, transparent)",
            };
          },
        ],
        [
          /^via-(.*?)-(\d+)$/,
          (match, { theme }) => {
            const [, color, size] = match;
            if (!theme?.colors?.[color]?.[size]) {
              return;
            }
            return {
              [`--un-gradient-via`]: theme.colors[color][size],
              "--un-gradient-stops":
                "var(--un-gradient-from, transparent), var(--un-gradient-via, transparent), var(--un-gradient-to, transparent)",
            };
          },
        ],
        [
          "bg-gradient-to-r",
          {
            "background-image":
              "linear-gradient(to right, var(--un-gradient-stops))",
          },
        ],
      ],
    }),
    react(),
  ],
});
