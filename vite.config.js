import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import unocssThemes from 'unocss-themes'

const themes = {
  blue: ".blue",
  purple: ".theme-purple"
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss({
    presets: [
      presetAttributify(),
      presetUno()
    ],
    variants: unocssThemes({ themes }),
  }), react()]
})
