import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts
} from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Roboto'],
        song: ['苹方', 'Arial', 'PingFang SC', '微软雅黑']
      }
    }),
    presetIcons()
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
  theme: {
    colors: {
      primary: '#ef8821'
    },
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700
    },
    letterSpacing: {
      normal: '0',
      wide: '.03em',
      wider: '0.3em',
      widest: '0.6em'
    }
  },
  shortcuts: {
    'pos-center': 'relative left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
    'btn-primary': 'bg-primary rounded mt-5 text-white py-1 px-4',
    'flex-center': 'flex justify-center items-center'
  },
  rules: [
    ['card-shadow', {
      'box-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }]
  ]
})
