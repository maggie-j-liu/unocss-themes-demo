import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

const themes = {
  blue: ".blue",
  purple: ".theme-purple"
}

const unocssThemes = ({ themes }) => {
  const themeVariants = Object.keys(themes);
  const variants = themeVariants.map(theme => {
    return {
      match: s => s.startsWith(theme + ":") ? s.slice(theme.length + 1) : null,
      selector: s => `${themes[theme]} ${s}`
    }
  })
  return variants;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss({
    presets: [
      presetAttributify(),
      presetUno()
    ],
    variants: unocssThemes({ themes })
  }), react()]
})
