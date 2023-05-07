import { HashRouter } from 'react-router-dom'
import RouterView from './router'
import Navbar from '@comp/Navbar'

// ant design样式
import 'antd/dist/reset.css'
// 自定义全局样式
import './assets/styles/global.scss'

// app页面的私有样式
import './styles/App.scoped.scss'

export default function App() {
  return (
    // hash 路由模式
    <HashRouter>
      <header>
        <Navbar />
      </header>
      <main>
        {/* 路由视图 */}
        <RouterView />
      </main>
    </HashRouter>
  )
}
