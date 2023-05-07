import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h2>react template</h2>
      {/* 子页面会替换掉 Outlet 标签 */}
      <Outlet />
    </>
  )
}
