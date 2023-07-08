import { proxy } from 'valtio'

const themes = ['#EF5350', '#FBC02D', '#d6569b', '#52ab62', '#FB8C00', '#3eb4f0', '#7E57C2'] as const

type Theme = typeof themes[number]

export const ThemeStore = proxy<{ theme: Theme }>({
  theme: themes[(new Date()).getDay()]
})
