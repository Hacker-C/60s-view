import { atom } from 'recoil'

export const imageState = atom<null | Node>({
  key: 'imageState',
  default: null
})
