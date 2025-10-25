import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Preview from './pages/Preview'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route path="app" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="builder/:resumeId" element={<ResumeBuilder />} />
      </Route>

      <Route path="views/:resumeId" element={<Preview />} />
    </Routes>
  )
}

export default App
