import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import NavBar from './navbar.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NavBar></NavBar>
  </React.StrictMode>,
)