import { useRoutes } from 'react-router-dom'

import Home from '@view/Home'
import About from '@view/About'
import Info from '@view/home/Info'

// 路由配置信息
const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        // index 当前子路由默认显式的页面
        index: true,
        element: <Info />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
]

export default function RouterView() {
  const routerElement = useRoutes(routes)
  return routerElement
}
