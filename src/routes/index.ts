import type React from 'react'
import Home from '@/pages/home'
import Download from '@/pages/download'
import ErrorPage from '@/pages/error-page'

export interface RouteType {
  path: string
  element: React.FC
  meta?: {
    title: string
  }
}

const routes: RouteType[] = [
  {
    path: '/',
    element: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/download',
    element: Download as React.FC,
    meta: {
      title: '下载图片'
    }
  },
  {
    path: '*',
    element: ErrorPage,
    meta: {
      title: 'Page not found'
    }
  }
]

export { routes }

