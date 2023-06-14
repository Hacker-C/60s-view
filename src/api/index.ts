const url = import.meta.env.VITE_REACT_APP_URL

export const get = (path: string) => {
  return () => fetch(`${url}${path}`)
}

export const _60s = get('/60s')

export const history = get('/history')
