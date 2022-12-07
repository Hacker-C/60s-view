import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      }
    })
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
  theme: {
    colors: {
      primary: '#7eebff'
    }
  },
  shortcuts: {
    'pos-center': 'relative left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
    'btn-primary': 'bg-primary rounded mt-5 text-white py-1 px-4',
    'flex-center': 'flex justify-center items-center'
  }
})
