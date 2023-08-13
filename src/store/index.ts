import { proxy } from 'valtio'
import { devtools, subscribeKey } from 'valtio/utils'

const themes = ['#EF5350', '#FBC02D', '#d6569b', '#52ab62', '#FB8C00', '#3eb4f0', '#7E57C2'] as const
type Theme = typeof themes[number]
/**
 * @description 主题颜色
 */
export const ThemeStore = proxy<{ theme: Theme }>({
  theme: themes[(new Date()).getDay()]
})

export const types = ['60s', 'history', 'truth'] as const
export type Types = typeof types
/**
 * @description 列表类型
 */
export const TypeStore = proxy<{ types: Types; update: (types: Types) => void }>({
  types: localStorage.getItem('types') ? JSON.parse(localStorage.getItem('types') as string) : types,
  update: (types) => {
    if (!types.length) {
      return console.error('至少选择一种类型')
    }
    TypeStore.types = types
  }
})

subscribeKey(TypeStore, 'types', () => {
  localStorage.setItem('types', JSON.stringify(TypeStore.types))
})

devtools(TypeStore, { name: '列表展示设置', enabled: true })
