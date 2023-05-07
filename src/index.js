import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // react严格模式(开发环境自动移除)
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
