import { NavLink } from 'react-router-dom'

import './index.scoped.scss'

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* 页面跳转,也可以使用 Link 组件 */}
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
    </nav>
  )
}
