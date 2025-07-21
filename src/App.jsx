import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import C2wDashboardLogin from './pages/login/login'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import C2wDashboard from './components/dashboard/dashboard'
import { SUPERADMIN } from './routeFile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<C2wDashboardLogin />} />
        <Route path={SUPERADMIN} element={<C2wDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
