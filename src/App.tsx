import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react'
import type { RouteType } from '@/routes'
import { routes } from '@/routes'

interface Props {
  route: RouteType
}

const DomTitle: React.FC<Props> = (props: Props) => {
  const { route } = props
  if (route?.meta?.title)
    document.title = '每天 60 秒读懂世界'
  return <route.element />
}

export default function App() {
  return (
    <div
      className="min-h-screen"
    >
      <div
        w="350px"
        className="relative left-[50%] -translate-x-[50%]"
      >
        <Router>
          <Routes>
            {
              routes.map((route) => {
                return (
                  <Route
                    path={route.path}
                    key={route.path}
                    element={<DomTitle route={route} />}
                  />
                )
              })
            }
          </Routes>
        </Router>
      </div>
    </div>
  )
}
